import { Comment, ICommentProps } from "./Comment"

interface ICommentsProps {
  comments: ICommentProps[]
}

export const Comments = ({ comments }: ICommentsProps) => {
  return (
    <div className="flex flex-col gap-2">
      {comments.map(comment => (
        <Comment key={comment.publishDate} {...comment} />
      ))}
    </div>
  )
}
