import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IPlayerClassProps, PlayerClass } from "./PlayerClass";

interface IPlayerClassGroupProps {
  title: string;
  open: boolean;
  position: number;
  classes: Omit<IPlayerClassProps, "onPlay" | "onCheck">[];
  onToggle: () => void;
}

export const PlayerClassGroup = ({ title, open, position, classes, onToggle }: IPlayerClassGroupProps) => {
  return (
    <div className="flex flex-col">
      <button className="flex gap-2 p-4 bg-[var(--color-paper)] items-center" onClick={onToggle}>
        <div className="bg-[var(--color-background)] h-12 w-12 flex items-center justify-center rounded-full">{position}</div>

        <div className="flex flex-col flex-1 items-start">
          <span className="font-bold text-start line-clamp-1">{title}</span>
          <span className="text-sm font-light text-start line-clamp-1">
            {classes.filter((classItem) => (classItem.done)).length}/{classes.length} aulas
          </span>
        </div>

        {open ?
          <MdKeyboardArrowDown size={28} />
          : <MdKeyboardArrowRight size={28} />
        }
      </button>

      <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {classes.map((classItem) => (
          <li key={classItem.title}>
            <PlayerClass
              {...classItem}
              onCheck={() => {}}
              onPlay={() => {}}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
