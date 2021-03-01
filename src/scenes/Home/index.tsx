import React, { useState, useMemo, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';
import debounce from 'lodash.debounce';
import { userReposQuery } from './queries';
import { resourceLimits } from 'worker_threads';

type Repository = {
  id: string;
  name: string;
  url: string;
  description: string;
  homepageUrl: string;
  forkCount: number;
  stargazerCount: number;
  createdAt: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [repos, setRepos] = useState<Repository[]>([]);
  const bearerToken = 'Bearer ' + process.env.REACT_APP_GITHUB_API_TOKEN;
  const apiUrl = process.env.REACT_APP_GITHUB_API_URL;

  const handleChange = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
      }, 500),
    [],
  );

  useEffect(() => {
    if (user && apiUrl) {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Authorization': bearerToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userReposQuery, variables: { user } })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data && res.data.repositoryOwner) {
            const { repositories: { edges } } = res.data.repositoryOwner;
            const repos = edges?.map((edge: any) => edge.node) || [];

            setRepos(repos);
          }
        })
        .catch(error => console.log("error"))
    }
  })

  return (
    <Box height="100vh">
      {!repos || !repos.length ?
        <Flex height="100%" alignItems="center" margin="0 auto" w={[200, 400, 600]}>
          <SearchBar onChange={handleChange} />
        </Flex>
        :
        <Flex height="100%">
          <Flex margin="0 auto" py={4} w={[200, 400, 600]}>
            <SearchBar onChange={handleChange} />
            {/* // add results */}
          </Flex>
        </Flex>
      }
    </Box>
  );
};

export default Home;
