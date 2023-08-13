import { getData } from "../../../app/Client";
import { Header } from "../../components/Header";
import { PublicationList } from "./types";
import { ListBox } from "./ListBox";
import { sortByOrder } from "@/app/utils/utils";

export default async function Texts() {
  const items = await getData<PublicationList>("publicationList");
  return (
    <div className="Texts">
      <Header title="Bibliografia" />
      <div className="Texts-list grid md:grid-rows-3 md:grid-cols-2 gap-6">
        {sortByOrder(items).map((item) => {
          return <ListBox key={item.title} item={item} />;
        })}
      </div>
    </div>
  );
}
