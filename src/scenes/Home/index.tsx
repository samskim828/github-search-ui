import React, { useState, useMemo, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';
import ErrorMessage from '../../components/ErrorMessage';
import { Repository } from '../../components/RepositoryCard';
import RepositoryList from '../../components/RepositoryList';
import debounce from 'lodash.debounce';
import { userReposQuery } from './queries';

const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
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
    if (user && apiUrl && !error) {
      setLoading(true);
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

            setLoading(false);
            setRepos(repos);
          }
        })
        .catch(error => {
          setLoading(false);
          setError(true);
        })
    }
  }, [user, apiUrl, error])

  if (error) {
    return (
      <ErrorMessage description="Looks like we had trouble processing your request. Please wait a few minutes and try again." />
    )
  }

  return (
    <Box height="100vh">
      {!user ?
        <Flex height="100%" alignItems="center" margin="0 auto" w={[200, 400, 600]}>
          <SearchBar onChange={handleChange} />
        </Flex>
        :
        <Flex height="100%">
          <Flex margin="0 auto" py={4} w={[300, 500, 700]} direction="column">
            <SearchBar onChange={handleChange} />
            <RepositoryList user={user} loading={loading} repositories={repos} />
          </Flex>
        </Flex>
      }
    </Box>
  );
};

export default Home;
