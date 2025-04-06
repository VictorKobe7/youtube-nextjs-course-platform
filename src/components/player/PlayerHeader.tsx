import Link from "next/link";
import { MdHome } from "react-icons/md";

interface IPlayerHeaderProps {
  title: string;
  subtitle: string;
}

export const PlayerHeader = ({ title, subtitle }: IPlayerHeaderProps) => {
  return (
    <div className="flex gap-4 items-center bg-[var(--color-paper)] px-4">
      <Link href="/">
        <MdHome size={28} />
      </Link>

      <div className="flex flex-col gap-1 py-1">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <h2 className="lineclamp-1">{subtitle}</h2>
      </div>
    </div>
  );
}
