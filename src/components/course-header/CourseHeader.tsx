import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContent } from "./components/CopyContent";

export const CourseHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">Title</h1>
      <CollapsibleText numberOfLinesWhenClosed={3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet fugiat illum. Ut dolorem natus optio, eos sunt enim? Quia explicabo soluta ipsam ab, eius eveniet quibusdam iure perferendis quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum odit non, consequuntur quisquam quos fuga! Dolores reiciendis, voluptatum molestias error eaque quo ut qui distinctio optio voluptates, nulla, minima culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam harum tempora quasi, corrupti voluptas exercitationem minus autem rerum id, veniam aliquid saepe neque reprehenderit, cupiditate unde molestiae ipsam distinctio?
      </CollapsibleText>

      <div className="flex gap-2 items-center">
        <CopyContent
          title="Copie o link abaixo"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        >
          <button className="py-2 px-4 bg-[var(--color-paper)] rounded-full flex gap-2 items-center">
            <MdShare />
            Compartilhar
          </button>
        </CopyContent>

        <span>48 aulas</span>
      </div>
    </div>
  );
}
