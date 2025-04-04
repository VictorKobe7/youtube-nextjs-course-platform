import { Class } from "@/components/course-content/components/Class";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `CodarSe - ${params.id}`
  }
}

export default function PageCourseDatail({ params }: Props) {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 lg:px-0 md:flex-row-reverse">
        <div className="flex-1">
          <StartCourse
            title="title"
            idClass="1"
            idCourse="1"
            imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </div>

        <div className="flex-[2]">
          <CourseHeader />

          <Class title="Aula 1" playerUrl={`/player/{idCourse}/{idClass}`} />
        </div>
      </div>
    </main>
  );
}
