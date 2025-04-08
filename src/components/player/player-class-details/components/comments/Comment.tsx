import Image from "next/image"
import { MdArrowDropDown, MdThumbUp } from "react-icons/md"

export const Comment = () => {
  return (
    <div className="flex gap-2 items-start">
      <Image
        src={"https://yt3.ggpht.com/yti/ANjgQV-FwFmH7AXIWpDfv4vMQVFXN-FfP_8G2Ie3S07ncfI=s88-c-k-c0x00ffffff-no-rj"}
        alt="Imagem de perfil"
        draggable={false}
        width={40}
        height={40}
        className="rounded-full"
      />

      <div className="bg-[var(--color-paper)] flex-1 flex flex-col gap-4 p-2 rounded">
        <div className="flex gap-2 items-center">
          <span className="font-bold">@user</span>
          <span className="font-extrabold text-xs opacity-50">01/01/2025 00:00</span>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <MdThumbUp />
            <span>10</span>
          </div>

          <button className="flex gap-1 items-center text-[var(--color-primary)]">
            <MdArrowDropDown size={24} />
            <span>Ver respostas (1)</span>
          </button>
        </div>
      </div>
    </div>
  )
}
