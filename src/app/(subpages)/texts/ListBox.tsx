import ReactMarkdown from "react-markdown";
import { PublicationList } from "./types";

export const ListBox = ({ item }: { item: PublicationList }) => {
  return (
    <div
      className={`ListBox ${
        item.order === 2 ? "row-span-2" : item.order === 3 ? "row-span-3" : ""
      }`}
    >
      <div className="ListBox-title retro-font">{item.title.toLowerCase()}</div>
      <ReactMarkdown className="Listbox-publications prose">
        {item.publicationList}
      </ReactMarkdown>
    </div>
  );
};
