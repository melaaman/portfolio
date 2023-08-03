import { sortByOrder } from "../../utils/utils";
import { getData } from "../../Client";
import { InfoBox } from "./InfoBox";
import { InfoBoxItem } from "./types";

export const InfoBoxList = async () => {
  const items = await getData<InfoBoxItem>("portfolioInfoBox");

  return (
    <div className="InfoBoxList">
      {sortByOrder(items).map((item, index) => (
        <InfoBox key={index} item={item} />
      ))}
    </div>
  );
};
