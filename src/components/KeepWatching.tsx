import Link from "next/link"
import { MdPlayCircle } from "react-icons/md";

export const KeepWatching = () => {
  return (
    <Link
      href={`/player/{idCourse}/{idClass}`}
      className="p-4 mx-4 flex gap-2 bg-[var(--color-primary)] rounded-2xl hover:no-underline"
    >
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="font-bold line-clamp-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
        <p className="line-clamp-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
      </div>

      <div className="flex gap-2 items-center">
        <span className="hidden md:block">Continuar assistindo</span>
        <MdPlayCircle size={28} />
      </div>
    </Link>
  );
}
