"use client";
import { useState } from "react";
import { IPlayerClassGroupProps, PlayerClassGroup } from "./components/PlayerClassGroup";
import { useRouter } from "next/navigation";

interface IPlayerPlaylistProps {
  playingIdCourse: string
  playingIdClass: string
  classGroups: Pick<IPlayerClassGroupProps, "title" | "classes">[];
}

export const PlayerPlaylist = ({ playingIdCourse, playingIdClass: playingIdClass, classGroups }: IPlayerPlaylistProps) => {
  const router = useRouter();

  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col p-4 bg-[var(--color-paper)]">
        <h3 className="text-lg font-bold">Conteúdo do curso</h3>
      </div>

      <ol>
        {classGroups.map((classGroup, index) => (
          <li key={classGroup.title}>
            <PlayerClassGroup
              {...classGroup}
              open={openedIndex === index}
              position={index + 1}
              playingIdClass={playingIdClass}
              onCheck={(idClass) => {}}
              onPlay={(idClass) => router.push(`/player/${playingIdCourse}/${idClass}`)}
              onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
