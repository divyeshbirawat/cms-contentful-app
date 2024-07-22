const POST_GRAPHQL_FIELDS = `
  slug
  banner {
    title
    url
  }
  blogTitle
  excerpt
  blogContent {
    json
  }
  authorCollection(limit: 20) {
      items {
        ... on Author {
          slug
          authorName
          authorImage {
            title
            url
          }
        }
      }

  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.blogCollection?.items?.[0];
}

function extractAuthor(fetchResponse: any): any {
  return fetchResponse?.data?.authorCollection?.items?.[0];
}


function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.blogCollection?.items;
}

function extractMenuEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.megaMenuCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  let entries = await fetchGraphQL(
    `query {
      blogCollection(where: { slug_exists: true }, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  return extractPostEntries(entries);
}

export async function getAuthorBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      authorCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          authorName
          authorImage {
            title
            url
          }
          authorDescription {
            json
          }
        }
      }
    }`,
    true,
  );
  return extractAuthor(entry);
}


export async function getAllMenuList(): Promise<any[]> {
  let list = await fetchGraphQL(
    `query {
      megaMenuCollection(preview: false)
      {
        items {
          megaMenuTitle
          megaMenuItemCollection(limit: 20) {
            items {
              ... on Blog {
                __typename
                blogTitle
                slug
              }
              ... on Author {
                __typename
                slug
                authorName
                authorImage {
                  title
                  url
                }
              }
            }
          }
        }
      }
    }`,
    false,
  );
  return extractMenuEntries(list);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const isDraftMode = false;
  let entries = await fetchGraphQL(
    `query {
      blogCollection(where: { slug_exists: true }, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

///////////////////////////////////////////////
// const contentful = require('contentful');

// export const getContentfulData = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });
