"use client";
import { useRouter } from "next/navigation";
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { useMemo } from "react";

interface IPlayerClassDetailsProps {
  playingIdCourse: string;
  playingIdClass: string;
  classGroups: Pick<IPlayerClassGroupProps, "title" | "classes">[];
}

export const PlayerClassDetails = ({ playingIdCourse, playingIdClass, classGroups }: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const nextIdClass = useMemo(() => {
    const classes = classGroups.flatMap((classGroup) => classGroup.classes);
    const currentClassIndex = classes.findIndex((classItem) => classItem.idClass === playingIdClass);
    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) {
      return undefined;
    }

    return classes[nextClassIndex].idClass;
  }, [classGroups, playingIdClass]);

  return (
    <div className="flex-1">
      <div className="aspect-video">
        <PlayerVideoPlayer
          videoId="apXQAnFX3JM"
          onPlayNext={() => nextIdClass && router.push(`/player/${playingIdCourse}/${nextIdClass}`)}
        />
      </div>
    </div>
  );
}
