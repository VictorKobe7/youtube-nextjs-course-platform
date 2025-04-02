import Image from "next/image"
import Link from "next/link";

interface ICardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

export const Card = ({ title, description, image, href }: ICardProps) => {
  return (
    <Link href={href} className="hover:no-underline">
      <article className="flex gap-2 flex-col p-2 rounded sm:hover:bg-[var(--color-primary)]">
        <Image
          src={image}
          width={1000}
          height={0}
          className="aspect-video object-cover rounded-2xl"
          draggable={false}
          alt={title}
        />
        <h4 className="font-extrabold text-lg">{title}</h4>
        <p className="line-clamp-3">{description}</p>
      </article>
    </Link>
  );
}
