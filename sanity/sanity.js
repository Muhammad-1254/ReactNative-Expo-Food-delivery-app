import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

 const clinet = createClient({
  projectId: '7dam7nyn',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: process.env.SANITY_CLIENT_TOKEN,
});

export const client = clinet


const builder = imageBuilder(clinet);
export const urlFor = (source) => builder.image(source);
