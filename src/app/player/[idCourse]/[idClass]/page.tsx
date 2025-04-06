import { PlayerHeader } from "@/components/player";

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
      {idCourse} {idClass}
    </>
  );
}
