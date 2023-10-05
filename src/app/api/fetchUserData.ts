export const query = `
query {
    user (username:"fibz") {
      profilePicture
      followersCount
      bioV2 {
          markdown 
      }
    }
  }
`;

export const userDataFetcher = async () => {
    const response = await fetch("https://gql.hashnode.com", {
        body: JSON.stringify({ query }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    const { data } = await response.json();
    return data;
};
