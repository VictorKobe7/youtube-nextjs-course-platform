import { PlayerHeader, PlayerPlaylist } from "@/components/player";

interface Props {
  params: {
    idCourse: string;
    idClass: string;
  }
}

export default function PagePlayer({ params: { idCourse, idClass } }: Props) {
  return (
    <main className="flex flex-col gap-2 h-screen">
      <PlayerHeader
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit."
        subtitle="Lorem ipsum dolor sit amet"
      />

      <div className="flex gap-2 h-[calc(100vh-72px)]">
        <div className="max-w-96">
          <PlayerPlaylist
            playingIdCourse={idCourse}
            playingIdClass={idClass}
            classGroups={[
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
            ]}
          />
        </div>

        <div className="flex-1">

        </div>
      </div>
    </main>
  );
}
