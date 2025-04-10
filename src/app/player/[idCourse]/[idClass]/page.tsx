import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from "@/components/player";
import { APIYoutube } from "@/shared/services/api-youtube";
import { Metadata } from "next";

type Params = Promise<{ idCourse: string, idClass: string }>;

export async function generateStaticParams() {
  const courses = await APIYoutube.course.getAll();

  const classesByCourse = await Promise.all([
    ...courses.map((course) => APIYoutube.class.getAllByCourseId(course.id))
  ]);

  return classesByCourse
    .flatMap((classes) => classes)
    .map((classItem) => ({ idCourse: classItem.idCourse, idClass: classItem.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const classDetails = await APIYoutube.class.getById((await params).idClass);

  return {
    title: classDetails.title,
    description: classDetails.description,
    openGraph: {
      locale: "pt_BR",
      type: "video.episode",
      title: classDetails.title,
      description: classDetails.description,
      videos: [`https://www.youtube.com/watch?v=${classDetails.videoId}`]
    }
  }
}

export default async function PagePlayer({ params }: { params: Params }) {
  const { idCourse, idClass } = await params;
  const courseDetails = await APIYoutube.course.getById(idCourse);
  const classDetails = await APIYoutube.class.getById(idClass);
  const comments = await APIYoutube.comments.getAllByVideoId(classDetails.videoId);

  const classGroupsData = courseDetails.classGroups.map((classGroup) => ({
    title: classGroup.title,
    classes: classGroup.classes.map((classItem) => ({
      title: classItem.title,
      done: false,
      idClass: classItem.id
    }))
  }));

  return (
    <main className="flex flex-col gap-2 h-screen">
      <PlayerHeader
        title={courseDetails.title}
        subtitle={classDetails.title}
      />

      <div className="flex gap-2 h-[calc(100vh-72px)]">
        <div className="max-w-96 hidden md:block">
          <PlayerPlaylist
            playingIdCourse={idCourse}
            playingIdClass={idClass}
            classGroups={classGroupsData}
          />
        </div>

        <PlayerClassDetails
          classItem={{ ...classDetails, id: idClass }}
          course={{ ...courseDetails, classGroups: classGroupsData }}
          comments={comments}
        />
      </div>
    </main>
  );
}
