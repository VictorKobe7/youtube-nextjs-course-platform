import { KeepWatching } from "@/components/KeepWatching";
import { Section } from "@/components/section/Section";
import { Metadata } from "next";
import { APIYoutube } from "@/shared/services/api-youtube";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default async function PageHome() {
  const courses = await APIYoutube.course.getAll();

  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] flex flex-col gap-4">
        <KeepWatching />

        <Section
          title="Veja mais cursos"
          variant="h-list"
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
