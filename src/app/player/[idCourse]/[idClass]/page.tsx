import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from "@/components/player";

type Params = Promise<{ idCourse: string, idClass: string }>;

export default async function PagePlayer({ params }: { params: Params }) {
  const { idCourse, idClass } = await params;
  const classGroupsData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      classes: [
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          done: true,
          idClass: "1"
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          done: false,
          idClass: "2"
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          done: false,
          idClass: "3"
        }
      ]
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      classes: [
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          done: true,
          idClass: "4"
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          done: false,
          idClass: "5"
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          done: false,
          idClass: "6"
        }
      ]
    }
  ];

  return (
    <main className="flex flex-col gap-2 h-screen">
      <PlayerHeader
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit."
        subtitle="Lorem ipsum dolor sit amet"
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
          course={{
            id: idCourse,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberOfClasses: 48,
            classGroups: classGroupsData
          }}
          classItem={{
            id: idClass,
            idVideo: "apXQAnFX3JM",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nlorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nProtótipo - https://www.figma.com/community/file/1349332873161679016/plataforma-de-cursos\n\nConteúdo:\n0:00 | Introdução\n0:29 | O que veremos nessa aula\n1:10 | Cronograma no notion",
            viewsCount: 48,
            likesCount: 48,
            commentsCount: 48
          }}
        />
      </div>
    </main>
  );
}
