"use client";

import useSWR from "swr";
import Article from "./Article";

const query = `
query {
  publication(host:"fibbonachos.hashnode.dev") {
    isTeam,
    title
    posts(first:20){
      edges{
        node {
          title,
          brief,
          url,
          slug,
          coverImage {
              url
          },
          content {
              markdown
          }
        }
      }
    }
  }
}
`;

export interface Node {
  title: string;
  brief: string;
  url: string;
}

interface ResultsObject {
  node: Node;
}

const Articles = () => {
  const fetcher = async () => {
    const response = await fetch("https://gql.hashnode.com", {
      body: JSON.stringify({ query }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const { data } = await response.json();
    return data;
  };

  const { data, error } = useSWR([query], fetcher);
  if (error) return <p>Error</p>;
  if (!data) return <p>Loading ...</p>;

  return (
    <div>
      {data.publication.posts.edges.map(
        (result: ResultsObject, index: number) => {
          return (
            <Article
              key={index}
              title={result.node.title}
              brief={result.node.brief}
              url={result.node.url}
            />
          );
        }
      )}
    </div>
  );
};

export default Articles;
