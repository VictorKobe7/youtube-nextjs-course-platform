"use client";
import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContent } from "./components/CopyContent";

interface ICouseHeaderProps {
  title: string;
  description: string;
  numberOfClasses: number;
}

export const CourseHeader = ({ title, description, numberOfClasses }: ICouseHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">{title}</h1>

      <CollapsibleText numberOfLinesWhenClosed={3}>{description}</CollapsibleText>

      <div className="flex gap-2 items-center">
        <CopyContent
          title="Copie o link abaixo"
          content={window.location.href}
        >
          <button className="py-2 px-4 bg-[var(--color-paper)] rounded-full flex gap-2 items-center">
            <MdShare />
            Compartilhar
          </button>
        </CopyContent>

        <span>{numberOfClasses} aulas</span>
      </div>
    </div>
  );
}
