import { createClient } from "contentful";

const space = `${process.env.CONTENTFUL_SPACE_ID}`;
const accessToken = `${process.env.CONTENTFUL_ACCESS_TOKEN}`;

const client = createClient({
  space,
  accessToken,
});

export default class ContentfulService {
  static get instance() {
    return new ContentfulService();
  }

  async getEntriesByType<T>(type: string) {
    return (
      await client.getEntries<T>({
        content_type: type,
      })
    ).items;
  }
}
