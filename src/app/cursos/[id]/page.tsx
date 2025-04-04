import { CourseContent } from "@/components/course-content/CourseContent";
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

        <div className="flex-[2] flex flex-col gap-12 pb-12">
          <CourseHeader
            title="Title"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet fugiat illum. Ut dolorem natus optio, eos sunt enim? Quia explicabo soluta ipsam ab, eius eveniet quibusdam iure perferendis quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum odit non, consequuntur quisquam quos fuga! Dolores reiciendis, voluptatum molestias error eaque quo ut qui distinctio optio voluptates, nulla, minima culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam harum tempora quasi, corrupti voluptas exercitationem minus autem rerum id, veniam aliquid saepe neque reprehenderit, cupiditate unde molestiae ipsam distinctio?"
            numberOfClasses={48}
          />

          <CourseContent
            classGroups={[
              {
                title: "Introdução e Apresentação do Projeto",
                idCourse: "1",
                classes: [
                  {
                    id: "1",
                    title: "Aula 1"
                  },
                  {
                    id: "2",
                    title: "Aula 2"
                  },
                ]
              }
            ]}
          />
        </div>
      </div>
    </main>
  );
}
