"use client";
import { useRouter } from "next/navigation";
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { useMemo } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";

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

        <Tabs.Content value="class-datails">
          <PlayerClassHeader
            title={classItem.title}
            description={classItem.description}
          />
        </Tabs.Content>
        <Tabs.Content value="class-comments">Comentários</Tabs.Content>
        <Tabs.Content value="course-details">
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
