export const userReposQuery = `query UserRepos($user: String!) {
  repositoryOwner(login: $user) {
    id
    login
    avatarUrl
    url
    repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 15) {
      edges {
        node {
          id
          name
          url
          homepageUrl
          description
          stargazerCount
          forkCount
          createdAt
        }
      }
    }
  }
}`