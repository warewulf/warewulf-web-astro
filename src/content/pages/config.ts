// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});
// Export a single `collections` object to register collections
export const collections = {
  pages: pagesCollection,
};
