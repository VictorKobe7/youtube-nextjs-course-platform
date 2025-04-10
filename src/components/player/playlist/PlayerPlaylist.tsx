"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IPlayerClassGroupProps, PlayerClassGroup } from "./components/PlayerClassGroup";
import { useRouter } from "next/navigation";
import { LocalStorage } from "@/shared/services/local-storage";

interface IPlayerPlaylistProps {
  playingIdCourse: string
  playingIdClass: string
  classGroups: Pick<IPlayerClassGroupProps, "title" | "classes">[];
}

export const PlayerPlaylist = ({ playingIdCourse, playingIdClass, classGroups }: IPlayerPlaylistProps) => {
  const router = useRouter();

  const [watchedContentIds, setWatchedContentIds] = useState<string[]>([]);
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(
    classGroups.findIndex((classGroup) => classGroup.classes.some((classItem) => classItem.idClass === playingIdClass))
  );

  useEffect(() => {
    const watchedContent = LocalStorage.watchedContent.get(playingIdCourse);

    if (!watchedContent) return;

    setWatchedContentIds(watchedContent);
  }, [playingIdCourse]);

  const classGroupsWithDone = useMemo(() => {
    return classGroups.map((classGroup) => ({
      ...classGroup,
      classes: classGroup.classes.map((classItem) => ({
        ...classItem,
        done: watchedContentIds.includes(classItem.idClass)
      }))
    }))
  }, [classGroups, watchedContentIds]);

  const handleCheck = useCallback((idClass: string) => {
    const newWatchedContent = LocalStorage.watchedContent.toggle(playingIdCourse, idClass);

    if (!newWatchedContent) return;

    setWatchedContentIds(newWatchedContent);
  }, [playingIdCourse]);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-col p-4 bg-[var(--color-paper)]">
        <h3 className="text-lg font-bold">Conteúdo do curso</h3>
      </div>

      <ol className="overflow-auto overflow-primary">
        {classGroupsWithDone.map((classGroup, index) => (
          <li key={classGroup.title}>
            <PlayerClassGroup
              {...classGroup}
              open={openedIndex === index}
              position={index + 1}
              playingIdClass={playingIdClass}
              onCheck={handleCheck}
              onPlay={(idClass) => router.push(`/player/${playingIdCourse}/${idClass}`)}
              onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
