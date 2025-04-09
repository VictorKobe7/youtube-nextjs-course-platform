"use client";
import { useRouter } from "next/navigation";
import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { useMemo, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader } from "@/components/course-header/ClientCourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "./components/comments/Comments";

interface IPlayerClassDetailsProps {
  course: {
    title: string;
    description: string;
    numberOfClasses: number;
  }
  classItem: {
    title: string;
    description: string;
  }
  playingIdCourse: string;
  playingIdClass: string;
  classGroups: Pick<IPlayerClassGroupProps, "title" | "classes">[];
}

export const PlayerClassDetails = ({ playingIdCourse, playingIdClass, classGroups, course, classItem }: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);

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
    <div className="flex-1 overflow-auto pb-10">
      <div className="aspect-video">
        <PlayerVideoPlayer
          ref={playerVideoPlayerRef}
          videoId="apXQAnFX3JM"
          onPlayNext={() => nextIdClass && router.push(`/player/${playingIdCourse}/${nextIdClass}`)}
        />
      </div>

      <Tabs.Root defaultValue="class-datails">
        <Tabs.List className="flex gap-4">
          <Tabs.Trigger
            value="class-datails"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-[var(--color-primary)]"
          >
            Visão geral
          </Tabs.Trigger>
          <Tabs.Trigger
            value="class-comments"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-[var(--color-primary)]"
          >
            Comentários
          </Tabs.Trigger>
          <Tabs.Trigger
            value="course-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-[var(--color-primary)]"
          >
            Visão geral do curso
          </Tabs.Trigger>
        </Tabs.List>

        <hr className="border-[var(--color-paper)] mb-2" />

        <Tabs.Content value="class-datails" className="px-2">
          <PlayerClassHeader
            title={classItem.title}
            description={classItem.description}
            onTimeClick={(seconds) => playerVideoPlayerRef.current?.setProgress(seconds)}
          />
        </Tabs.Content>
        <Tabs.Content value="class-comments" className="px-2">
          <Comments />
        </Tabs.Content>
        <Tabs.Content value="course-details" className="px-2">
          <CourseHeader
            title={course.title}
            description={course.description}
            numberOfClasses={course.numberOfClasses}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
