import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setUser(event.target.value);

  return (
    <Box height="100vh">
      <Flex height="100%" alignItems="center" margin="0 auto" w={[200, 400, 600]}>
        <SearchBar onChange={handleChange} />
      </Flex>
    </Box>
  );
};

export default Home;
