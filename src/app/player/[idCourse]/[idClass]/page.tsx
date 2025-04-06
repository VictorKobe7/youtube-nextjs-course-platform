"use client";
import { PlayerClassGroup, PlayerHeader } from "@/components/player";

interface Props {
  params: {
    idCourse: string;
    idClass: string;
  }
}

export default function PagePlayer({ params: { idCourse, idClass } }: Props) {
  return (
    <main className="flex flex-col gap-4">
      <PlayerHeader
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        subtitle="Lorem ipsum dolor sit amet"
      />

      <PlayerClassGroup
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        open
        position={1}
        onToggle={() => {}}
        classes={[
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            done: true,
            playing: false
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            done: false,
            playing: true
          },
          {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            done: false,
            playing: false
          },
        ]}
      />
    </main>
  );
}
