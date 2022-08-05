import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'i1y16o8yrt',
  apiKey: process.env.API_KEY,
});