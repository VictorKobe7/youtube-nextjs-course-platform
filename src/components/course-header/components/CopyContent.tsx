"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface IContentCopyProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

export const CopyContent = ({ title, content, children }: IContentCopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true)
    window.navigator.clipboard.writeText(content);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)

      return () => clearTimeout(timer);
    }
  }, [copied])

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="p-2 bg-[var(--color-paper)] border border-[var(--color-primary)] rounded-lg flex flex-col gap-2 min-w-72 max-w-sm">
          <span>{title}</span>

          <div className="flex items-center gap-2">
            <input
              readOnly
              autoFocus
              value={content}
              onFocus={(e) => e.target.select()}
              className="bg-[var(--color-background)] p-1 px-2 rounded w-full"
            />

            <button className="p-2" onClick={handleCopy}>
              {copied ? <MdCheck className="text-[var(--color-primary)]" /> : <MdContentCopy />}
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
