"use client";
import dynamic from "next/dynamic";
import { UrlMatcher } from "interweave-autolink";
import { useMemo } from "react";

const Interweave = dynamic(() => import("interweave").then((result) => result.Interweave), { ssr: false });

interface IPlayerClassHeaderProps {
  title: string;
  description: string;
}

export const PlayerClassHeader = ({ title, description }: IPlayerClassHeaderProps) => {
  const urlMatcher = useMemo(() => {
    return new UrlMatcher(
      "UrlMatcher",
      { validateTLD: false },
      ({ url }) => (
        <a href={url} target="_blank" className="text-[var(--color-primary)]">{url}</a>
      )
    )
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-extrabold text-xl">{title}</h3>

      <Interweave content={description} matchers={[urlMatcher]} />
    </div>
  );
}
