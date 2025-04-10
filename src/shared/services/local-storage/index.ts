const KEEP_WATCHING__LOCAL_STORAGE_KEY = "KEEP_WATCHING";
const WATCHED_CONTENT__LOCAL_STORAGE_KEY = "WATCHED_CONTENT";

export interface IKeepWatching {
  idClass: string;
  idCourse: string;
  className: string;
  courseName: string;
}

export const LocalStorage = {
  keepWatching: {
    get: (): IKeepWatching | null => {
      try {
        const result = window.localStorage.getItem(KEEP_WATCHING__LOCAL_STORAGE_KEY);

        if (result) {
          return JSON.parse(result);
        }

        return null;
      } catch {
        return null;
      }
    },
    set: (data: IKeepWatching) => {
      try {
        window.localStorage.setItem(KEEP_WATCHING__LOCAL_STORAGE_KEY, JSON.stringify(data));
      } catch {
        return;
      }
    }
  },
  watchedContent: {
    get: (idCourse: string): string[] | null => {
      try {
        const data = localStorage.getItem(WATCHED_CONTENT__LOCAL_STORAGE_KEY);
        
        if (!data) return null;

        const watchedContent = JSON.parse(data) as Record<string, string[]>;

        return watchedContent[idCourse] || null;
      } catch {
        return null;
      }
    },
    toggle: (idCourse: string, idClass: string, forceState?: "add" | "remove") => {
      try {
        let watchedContent: Record<string, string[]> = {};

        const data = localStorage.getItem(WATCHED_CONTENT__LOCAL_STORAGE_KEY);

        if (data) {
          watchedContent = JSON.parse(data);
        }

        if (!watchedContent[idCourse]) {
          watchedContent[idCourse] = [];
        }

        if (forceState !== undefined) {
          if (forceState === "add") {
            if (!watchedContent[idCourse].includes(idClass)) {
              watchedContent[idCourse].push(idClass);
            }
          } else {
            watchedContent[idCourse] = watchedContent[idCourse].filter((id) => id !== idClass);
          }
        } else {
          if (watchedContent[idCourse].includes(idClass)) {
            watchedContent[idCourse] = watchedContent[idCourse].filter((id) => id !== idClass);
          } else {
            watchedContent[idCourse].push(idClass);
          }
        }

        localStorage.setItem(WATCHED_CONTENT__LOCAL_STORAGE_KEY, JSON.stringify(watchedContent));

        return watchedContent[idCourse] || null;
      } catch {
        return null;
      }
    }
  }
}
