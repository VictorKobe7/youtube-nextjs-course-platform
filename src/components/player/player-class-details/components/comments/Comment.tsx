import { format, parseISO } from "date-fns";
import Image from "next/image"
import { useMemo, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp, MdThumbUp } from "react-icons/md"

export interface ICommentProps {
  author: {
    image: string;
    userName: string;
  };
  content: string;
  likesCount: number;
  publishDate: string;
  replies?: ICommentProps[];
}

export const Comment = ({ author, content, likesCount, publishDate, replies }: ICommentProps) => {
  const [showReplies, setShowReplies] = useState(false);

  const date = useMemo(() => {
    const dateAsDate = parseISO(publishDate);

    return format(dateAsDate, "dd/MM/yyyy HH:mm");
  }, [publishDate]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-start">
        <Image
          src={author.image}
          alt="Imagem de perfil"
          draggable={false}
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className="bg-[var(--color-paper)] flex-1 flex flex-col gap-4 p-2 rounded">
          <div className="flex gap-2 items-center">
            <span className="font-bold">{author.userName}</span>
            <span className="font-extrabold text-xs opacity-50">{date}</span>
          </div>

          <p>{content}</p>

          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <MdThumbUp />
              <span>{likesCount}</span>
            </div>

            {(replies && replies.length > 0) && (
              <button
                className="flex gap-1 items-center text-[var(--color-primary)]"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies ? <MdArrowDropUp size={24} /> : <MdArrowDropDown size={24} />}
                <span>{showReplies ? "Ocultar" : "Ver"} respostas ({replies.length})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="pt-2 pl-12">
        {showReplies && replies?.map((reply) => (
          <Comment key={reply.publishDate} {...reply} />
        ))}
      </div>
    </div>
  )
}
