export const query = `
query ($slug: String!){
        publication(host:"fibbonachos.hashnode.dev") {
          isTeam
          title
            post(slug: $slug) {
              title,
              coverImage {
                url
              }
              url
              readTimeInMinutes
              responseCount
              publishedAt
              reactionCount
              views
              content {
                html
              }
            }
          }
        }
          `;

export const articleContentFetcher = async (slug: string) => {
    const variables = { slug: slug };
    const response = await fetch("https://gql.hashnode.com", {
        body: JSON.stringify({ query, variables }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    const { data } = await response.json();
    return data;
};
