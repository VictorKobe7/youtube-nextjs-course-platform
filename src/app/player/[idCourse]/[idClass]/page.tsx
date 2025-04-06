interface Props {
  params: {
    idCourse: string;
    idClass: string;
  }
}

export default function PagePlayer({ params: { idCourse, idClass } }: Props) {
  return (
    <>{idCourse} {idClass}</>
  );
}
