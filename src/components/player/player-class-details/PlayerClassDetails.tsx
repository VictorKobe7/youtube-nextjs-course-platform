"use client";
import { useRouter } from "next/navigation";
import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { useEffect, useMemo, useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader } from "@/components/course-header/ClientCourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "./components/comments/Comments";
import { PlayerPlaylist } from "../playlist/PlayerPlaylist";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";

interface IPlayerClassDetailsProps {
  course: {
    id: string;
    title: string;
    description: string;
    numberOfClasses: number;
    classGroups: Pick<IPlayerClassGroupProps, "title" | "classes">[];
  }
  classItem: {
    id: string;
    videoId: string;
    title: string;
    description: string;
    viewsCount: number;
    likesCount: number;
    commentsCount: number;
  }
}

export const PlayerClassDetails = ({ course, classItem }: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);

  const [currentTab, setCurrentTab] = useState("class-datails");

  useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 768px)");

    const handleMatchMedia = (e: MediaQueryListEvent) => {
      if (e.matches && currentTab === "course-playlist") {
        setCurrentTab("class-datails");
      }
    }

    matchMedia.addEventListener("change", handleMatchMedia);

    return () => matchMedia.removeEventListener("change", handleMatchMedia);
  }, [currentTab]);

  const nextIdClass = useMemo(() => {
    const classes = course.classGroups.flatMap((classGroup) => classGroup.classes);
    const currentClassIndex = classes.findIndex(({ idClass }) => idClass === classItem.id);
    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) {
      return undefined;
    }

    return classes[nextClassIndex].idClass;
  }, [course.classGroups, classItem.id]);

  return (
    <div className="flex-1 overflow-auto pb-10">
      <div className="aspect-video">
        <PlayerVideoPlayer
          ref={playerVideoPlayerRef}
          videoId={classItem.videoId}
          onPlayNext={() => nextIdClass && router.push(`/player/${course.id}/${nextIdClass}`)}
        />
      </div>

      <div className="flex gap-2 p-2 opacity-50">
        <div className="flex gap-1 items-center">
          <MdVisibility />
          <span>{classItem.viewsCount}</span>
          <span>visualizações</span>
        </div>

        <a className="flex gap-1 items-center" target="_blank" href={`https://www.youtube.com/watch?v=${classItem.videoId}`}>
          <MdThumbUp />
          <span>{classItem.likesCount}</span>
          <span>curtidas</span>
        </a>

        <div className="flex gap-1 items-center">
          <MdComment />
          <span>{classItem.commentsCount}</span>
          <span>comentários</span>
        </div>
      </div>

      <Tabs.Root value={currentTab} onValueChange={(value) => setCurrentTab(value)}>
        <Tabs.List className="flex gap-4">
          <Tabs.Trigger
            value="class-datails"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-[var(--color-primary)]"
          >
            Visão geral
          </Tabs.Trigger>
          <Tabs.Trigger
            value="course-playlist"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-[var(--color-primary)] md:hidden"
          >
            Conteúdo do curso
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
        <Tabs.Content value="course-playlist" className="px-2">
          <PlayerPlaylist
            playingIdCourse={course.id}
            playingIdClass={classItem.id}
            classGroups={course.classGroups}
          />
        </Tabs.Content>
        <Tabs.Content value="class-comments" className="px-2">
          <Comments
            comments={[
              {
                author: {
                  image: "https://yt3.ggpht.com/yti/ANjgQV-FwFmH7AXIWpDfv4vMQVFXN-FfP_8G2Ie3S07ncfI=s88-c-k-c0x00ffffff-no-rj",
                  userName: "@user"
                },
                content: "1",
                likesCount: 10,
                publishDate: "2025-01-01T00:00:00.00Z",
                replies: undefined
              }
            ]}
          />
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
