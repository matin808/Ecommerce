import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "6kwhivv2",
  dataset: "production",
  apiVersion: "2022-06-29",
  useCdn: true,
  token:
    "skF4s2nZaRR4SAQBMHCiYcKNGhweYgkYXpHea9CZpPqxwqs0ZiUeE3wlGNY3xJRQwsCmwPsLDVXf6Mholvjz1ynRV1IwFoEitcf0JqsTBrJ65AmAy6ZJQ2MDFR6h3xK6FDR9LnELdj7u94uMmVEsqEpjjYSR9tYJQGQeuGlwUHxh4ro202zC",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
