import { Card } from "../card/Card";

export const Section = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text text-xl">Todos os cursos</h2>

      <ul className="flex flex-col gap-2">
        <li>
          <Card
            href="/cursos/"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
          />
        </li>
        <li>
          <Card
            href="/cursos/"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
          />
        </li>
        <li>
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
