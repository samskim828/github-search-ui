import React, { useState, useMemo, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';
import debounce from 'lodash.debounce';
import { userReposQuery } from './queries';

const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');
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
        body: JSON.stringify({ query: userReposQuery, variables: { user: 'sdf' } })
      })
        .then((res) => res.json())
        .then((res) => console.log("res", res))
        .catch(error => console.log("error"))
    }
  })

  return (
    <Box height="100vh">
      <Flex height="100%" alignItems="center" margin="0 auto" w={[200, 400, 600]}>
        <SearchBar onChange={handleChange} />
      </Flex>
    </Box>
  );
};

export default Home;
