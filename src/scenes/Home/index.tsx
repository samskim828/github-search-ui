import React, { useState, useMemo } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';
import debounce from 'lodash.debounce';

const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');

  const handleChange = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
      }, 500),
    [],
  );

  return (
    <Box height="100vh">
      <Flex height="100%" alignItems="center" margin="0 auto" w={[200, 400, 600]}>
        <SearchBar onChange={handleChange} />
      </Flex>
    </Box>
  );
};

export default Home;
