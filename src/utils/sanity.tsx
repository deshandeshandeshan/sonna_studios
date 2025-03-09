import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "SONNA_Sanity", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (e.g., 'production')
  useCdn: true, // `true` for faster response times, `false` for freshest data
});

export default client;
