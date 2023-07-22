import { getItems } from "../../Client";
import { InfoBox } from "./InfoBox";
import { InfoBoxItem } from "./types";

async function getData() {
  const res = await getItems<InfoBoxItem>("portfolioInfoBox");

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res;
}

export const InfoBoxList = async () => {
  const items = await getData();

  return (
    <div className="InfoBoxList">
      {items
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((item, index) => (
          <InfoBox key={index} item={item} />
        ))}
    </div>
  );
};
