import { createClient } from "contentful";

type ContentType = "portfolioInfoBox" | "publicationList";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getData = async <T>(contentType: ContentType): Promise<T[]> => {
  const newItems: T[] = [];

  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });

    entries.items.forEach((item) => {
      newItems.push(item.fields as T);
    });
  } catch {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return newItems;
};
