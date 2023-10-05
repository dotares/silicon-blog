import React from "react";

export const query = `
query ($slug: String!){
        publication(host:"fibbonachos.hashnode.dev") {
          isTeam
          title
            post(slug: $slug) {
              title,
              content {
                markdown
              }
            }
          }
        }
          `;

export const articleContentFetcher: React.FC<string> = async (slug) => {
    console.log(`This is from articleContentFetcher: ${slug}`);
    const variables = { slug: slug };
    const response = await fetch("https://gql.hashnode.com", {
        body: JSON.stringify({ query, variables }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    const { data } = await response.json();
    return data;
};
