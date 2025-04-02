import { Card } from "../card/Card";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
}

export const Section = ({ title, variant = "grid" }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text text-xl">{title}</h2>

      <ul
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
          <Card
            href="/cursos/"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
          />
        </li>
        <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
          <Card
            href="/cursos/"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
          />
        </li>
        <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
          <Card
            href="/cursos/"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
          />
        </li>
      </ul>
    </section>
  );
}
