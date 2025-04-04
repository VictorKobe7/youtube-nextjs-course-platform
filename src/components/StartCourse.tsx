"use client"
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface IStartCourseProps {
  title: string;
  idClass: string;
  idCourse: string;
  imageUrl: string;
}

export const StartCourse = ({ title, idClass, idCourse, imageUrl }: IStartCourseProps) => {
  const [ref, inView] = useInView({ threshold: 0.2, initialInView: true });

  return (
    <>
      <div ref={ref} className="p-3 bg-[var(--color-paper)] rounded-md flex flex-col gap-4 md:sticky md:top-[104px]">
        <Link
          href={`/player/${idCourse}/${idClass}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded"
        >
          <div className="w-full h-full flex items-center justify-center bg-[var(--color-background)] rounded opacity-0 hover:opacity-70 transition-opacity">
            <MdPlayCircleOutline size={58} />
          </div>
        </Link>

        <Link
          href={`/player/${idCourse}/${idClass}`}
          className="bg-[var(--color-primary)] p-2 px-3 rounded text-center hover:no-underline"
        >
          Começar curso
        </Link>
      </div>

      {!inView && (
        <div className="p-3 px-2 bg-[var(--color-paper)] flex flex-col gap-4 absolute left-0 right-0 top-14">
          <h1 className="font-extrabold text-xl">{title}</h1>

          <Link
            href={`/player/${idCourse}/${idClass}`}
            className="bg-[var(--color-primary)] p-2 px-3 rounded text-center hover:no-underline"
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  );
}
