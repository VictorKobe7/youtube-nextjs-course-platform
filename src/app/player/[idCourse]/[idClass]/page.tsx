"use client";
import { PlayerClass, PlayerHeader } from "@/components/player";

interface Props {
  params: {
    idCourse: string;
    idClass: string;
  }
}

export default function PagePlayer({ params: { idCourse, idClass } }: Props) {
  return (
    <>
      <PlayerHeader
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        subtitle="Lorem ipsum dolor sit amet"
      />

      <PlayerClass
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cum repellendus ipsa iusto porro optio cumque maiores ipsam! Eius modi tempora earum vitae unde facere in harum mollitia commodi magnam."
        playing
        done={false}
        onCheck={() => {}}
        onPlay={() => {}}
      />
    </>
  );
}
