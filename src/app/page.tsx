import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="max-w-full min-[880px]:max-w-[880px]">
        <Section
          title="Veja mais cursos"
          variant="h-list"
          items={[
            {
              href: "/cursos/1",
              title: "Curso 1",
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
            },
            {
              href: "/cursos/2",
              title: "Curso 2",
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
            },
            {
              href: "/cursos/3",
              title: "Curso 3",
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
            },
            {
              href: "/cursos/4",
              title: "Curso 4",
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
              description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
            }
          ]}
        />
      </div>
    </main>
  );
}
