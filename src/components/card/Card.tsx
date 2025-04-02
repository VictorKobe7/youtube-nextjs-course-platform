import Image from "next/image"
import Link from "next/link";

export const Card = () => {
  return (
    <Link href="/cursos/" className="hover:no-underline">
      <article className="flex gap-2 flex-col p-2 rounded sm:hover:bg-[var(--color-primary)]">
        <Image
          src="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          width={1000}
          height={0}
          className="aspect-video object-cover rounded-2xl"
          draggable={false}
          alt="Curso"
        />
        <h4 className="font-extrabold text-lg">Curso</h4>
        <p className="line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati.</p>
      </article>
    </Link>
  );
}
