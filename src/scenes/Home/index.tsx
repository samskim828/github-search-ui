import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <Box height="100vh">
      <Flex height="100%" alignItems="center" margin="0 auto" w={[200, 400, 600]}>
        <SearchBar />
      </Flex>
    </Box>
  );
};

export default Home;
