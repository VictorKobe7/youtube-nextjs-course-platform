"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { MdPlayCircle } from "react-icons/md";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IPlayerVideoPlayerProps {
  videoId: string;
  onPlayNext: () => void;
}

export const PlayerVideoPlayer = ({ videoId, onPlayNext }: IPlayerVideoPlayerProps) => {
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined);

  const secondsUntilEnd = useMemo(() => {
    if (!totalDuration || !progress) return undefined;

    return Number((totalDuration - progress).toFixed(0));
  }, [totalDuration, progress]);

  const showNextButton = useMemo(() => {
    return !!secondsUntilEnd && secondsUntilEnd <= 30;
  }, [secondsUntilEnd]);

  return (
    <>
      {showNextButton && (
        <button
          onClick={onPlayNext}
          className="bg-[var(--color-primary)] p-3 px-4 rounded-lg font-bold flex gap-2 items-center absolute right-4 top-36"
        >
          Próxima aula em {secondsUntilEnd}
          <MdPlayCircle size={24} />
        </button>
      )}

      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        height="100%"
        width="100%"
        playing={false}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
        onDuration={duration => setTotalDuration(duration)}
        onEnded={() => onPlayNext()}
        controls
      />
    </>
  )
}
