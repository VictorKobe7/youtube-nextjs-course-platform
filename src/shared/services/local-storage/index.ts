const LOCAL_STORAGE_KEY = "KEEP_WATCHING";

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
        const result = window.localStorage.getItem(LOCAL_STORAGE_KEY);

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
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      } catch {
        return;
      }
    }
  }
}
