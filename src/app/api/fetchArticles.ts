export const query = `query {
  publication(host: "fibbonachos.hashnode.dev") {
    isTeam
    title
    posts(first: 20) {
      edges {
        node {
          title
          brief
          url
          slug
          coverImage {
            url
          }
          content {
            markdown
          }
        }
      }
    }
  }
}`;

export const articlesFetcher = async () => {
    const response = await fetch("https://gql.hashnode.com", {
        body: JSON.stringify({ query }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    const { data } = await response.json();
    return data;
};
