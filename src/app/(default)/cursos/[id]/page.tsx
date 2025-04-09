import { CourseContent } from "@/components/course-content/CourseContent";
import { CourseHeader } from "@/components/course-header/ClientCourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";
import { APIYoutube } from "@/shared/services/api-youtube";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  const courses = await APIYoutube.course.getAll();
  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const courseDetail = await APIYoutube.course.getById(id);

  return {
    title: courseDetail.title,
    description: courseDetail.description,
    openGraph: {
      locale: "pt_BR",
      type: "video.other",
      title: courseDetail.title,
      images: courseDetail.image,
      description: courseDetail.description,
      videos: courseDetail.classGroups
        .reduce<string[]>((previous, current) => [
          ...previous,
          ...current.classes.map((classItem) => `https://www.codarse.com/player/${current.idCourse}/${classItem.id}`)
        ], [])
    }
  }
}

export default async function PageCourseDetail({ params }: { params: Params }) {
  const { id } = await params;
  const courseDetail = await APIYoutube.course.getById(id);
  const firstClass = courseDetail.classGroups.at(0)?.classes.at(0);

  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 lg:px-0 md:flex-row-reverse">
        {firstClass && (
          <div className="flex-1">
            <StartCourse
              title={firstClass.title}
              idClass={firstClass.id}
              idCourse={courseDetail.id}
              imageUrl={courseDetail.image}
            />
          </div>
        )}

        <div className="flex-[2] flex flex-col gap-12 pb-12">
          <CourseHeader
            title={courseDetail.title}
            description={courseDetail.description}
            numberOfClasses={courseDetail.numberOfClasses}
          />

          <CourseContent classGroups={courseDetail.classGroups} />
        </div>
      </div>
    </main>
  );
}
