import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function PageHome() {
  return (
    <main>
      <Card
        href="/cursos/"
        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
        title="Curso"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio saepe, veritatis voluptatibus repellendus harum impedit tempora dolore, dolorem fugit explicabo repellat officiis quasi aliquam eum sequi quod ducimus provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dicta accusantium natus temporibus est velit eius nemo distinctio optio at, asperiores blanditiis iusto, sed omnis corporis dolor consectetur perferendis obcaecati."
      />
    </main>
  );
}
