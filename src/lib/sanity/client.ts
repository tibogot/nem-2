import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "4k7o85u3", // replace with your Sanity project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-20", // use current date
});
