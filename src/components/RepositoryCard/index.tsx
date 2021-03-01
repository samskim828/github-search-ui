import React from 'react';
import { Box, Flex, Avatar } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import abbreviate from 'number-abbreviate';


export type Repository = {
  id: string;
  name: string;
  url: string;
  description?: string;
  homepageUrl?: string;
  forkCount: number;
  stargazerCount: number;
  openGraphImageUrl: string;
  createdAt: string;
}

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {

  return (
    <Box w={[300, 500, 700]} borderWidth="1px" borderRadius="lg" overflow="hidden" m={2} p={2}>
      <Flex alignItems="center">
        <Avatar size="md" src={repository.openGraphImageUrl} />
        <Box
          color="gray.800"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="lg"
          textTransform="uppercase"
          ml="2"
        >
          {repository.name}
        </Box>
      </Flex>

      <Box
        m={1}
        fontWeight="semibold"
        lineHeight="tight"
        color="gray.600"
        isTruncated
      >
        {repository.description}
      </Box>

      <Flex my={1} mx={1} alignItems="center">
        <StarIcon
          color="gray.500"
        />
        <Box ml={1}>
          {abbreviate(repository.stargazerCount, 1)}
        </Box>
      </Flex>
    </Box>
  )
}

export default RepositoryCard;