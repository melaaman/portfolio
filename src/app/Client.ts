import { createClient } from "contentful";

type ContentType = "portfolioInfoBox";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getItems = async <T>(contentType: ContentType): Promise<T[]> => {
  const entries = await client.getEntries({
    content_type: contentType,
  });

  const newItems: T[] = [];

  entries.items.forEach((item) => {
    newItems.push(item.fields as T);
  });

  return newItems;
};
