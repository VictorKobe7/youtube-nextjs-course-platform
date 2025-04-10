import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from "@/components/player";
import { APIYoutube } from "@/shared/services/api-youtube";

type Params = Promise<{ idCourse: string, idClass: string }>;

export default async function PagePlayer({ params }: { params: Params }) {
  const { idCourse, idClass } = await params;
  const courseDetails = await APIYoutube.course.getById(idCourse);
  const classDetails = await APIYoutube.class.getById(idClass);

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
        />
      </div>
    </main>
  );
}
