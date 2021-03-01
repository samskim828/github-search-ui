import React from 'react';
import { Box, Flex, Text, Heading, Spinner } from '@chakra-ui/react';
import RepositoryCard, { Repository } from '../RepositoryCard';

interface RepositoryListProps {
  repositories: Repository[];
  user: string;
  loading: boolean;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories, user, loading }) => {

  return (
    <Box>
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
        <Heading as="h3" size="lg" data-testid="home-user-value">
          {user}
        </Heading>
      </Flex>
      <Box>
        {loading ? (
          <Box my={5} textAlign="center">
            <Spinner size="xl" />
          </Box>
        ) :
          repositories.length ? repositories.map(repo => (<RepositoryCard key={repo.id} repository={repo} />)) :
            (<Box my={2} textAlign="center">
              Sorry! Couldn't find anything. Try searching for another user.
            </Box>)
        }
      </Box>
    </Box>
  )
}

export default RepositoryList;