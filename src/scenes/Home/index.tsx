import React, { useState, useMemo, useEffect } from 'react';
import { Box, Flex, Spinner, Text, Heading } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';
import ErrorMessage from '../../components/ErrorMessage';
import RepositoryCard, { Repository } from '../../components/RepositoryCard';
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
      // fetch(apiUrl, {
      //   method: 'POST',
      //   headers: { 'Authorization': bearerToken, 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ query: userReposQuery, variables: { user } })
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res.data && res.data.repositoryOwner) {
      //       const { repositories: { edges } } = res.data.repositoryOwner;
      //       const repos = edges?.map((edge: any) => edge.node) || [];

      //       setRepos(repos);
      //     }
      //   })
      //   .catch(error => {
      //     setLoading(false);
      //     setError(true);
      //   })
      setLoading(false);
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
            <Flex
              color="gray.800"
              letterSpacing="wide"
              fontSize="lg"
              fontWeight="normal"
              textTransform="uppercase"
              m={5}
              alignItems="center"
            >
              <Text mr={3}>
                Top 15 Repository Results for:
              </Text>
              <Heading as="h3" size="lg">
                {user}
              </Heading>
            </Flex>
            <Box>
              {loading && (
                <Box my={5} textAlign="center">
                  <Spinner size="xl" />
                </Box>
              )}
              {repos.length ? repos.map(repo => (<RepositoryCard key={repo.id} repository={repo} />)) :
                (<Box my={2} textAlign="center">
                  Sorry! Couldn't find anything. Try searching for another user.
                </Box>)
              }
            </Box>
          </Flex>
        </Flex>
      }
    </Box>
  );
};

export default Home;
