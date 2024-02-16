import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
 const client = createClient({
  projectId: 'x2h2v652',
  dataset: 'production',
  useCdn: true,
  apiVersion:'2024-02-16',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

export default client;  