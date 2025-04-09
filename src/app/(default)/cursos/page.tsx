import { Section } from "@/components/section/Section";
import { Metadata } from "next";
import { APIYoutube } from "@/shared/services/api-youtube";

export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
};

export default async function PageCursos() {
  const courses = await APIYoutube.course.getAll();

  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px]">
        <Section
          title="Todos os cursos"
          variant="grid"
          items={
            courses.map((course) => ({
              href: `/cursos/${course.id}`,
              title: course.title,
              image: course.image,
              description: course.description
            }))
          }
        />
      </div>
    </main>
  );
}