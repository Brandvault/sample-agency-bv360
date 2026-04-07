import * as prismic from "@prismicio/client";

export const repositoryName = "sample-agency";

const routes: prismic.ClientConfig["routes"] = [
  { type: "homepage", path: "/" },
  { type: "page", path: "/:uid" },
];

export function createClient(config?: prismic.ClientConfig) {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
  });

  return client;
}
