import React from 'react';
import { Box, Flex, Avatar, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { StarIcon, AttachmentIcon } from '@chakra-ui/icons';
import abbreviate from 'number-abbreviate';


export type Repository = {
  id: string;
  name: string;
  url: string;
  description?: string | null;
  homepageUrl?: string | null;
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
    <LinkBox w={[300, 500, 700]} borderWidth="1px" borderRadius="lg" overflow="hidden" m={2} p={2} _hover={{ backgroundColor: 'gray.100' }}>
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
          <LinkOverlay href={repository.url} isExternal>
            {repository.name}
          </LinkOverlay>
        </Box>
      </Flex>

      <Box
        m={1}
        color="gray.600"
        isTruncated
      >
        {repository.description || ''}
      </Box>

      <Flex my={1} mx={1} alignItems="center">
        <Flex mr={3} alignItems="center">
          <StarIcon
            color="gray.500"
          />
          <Box ml={1}>
            {abbreviate(repository.stargazerCount, 1)}
          </Box>
        </Flex>
        <Flex mr={3} alignItems="center">
          <AttachmentIcon
            color="gray.500"
          />
          <Box ml={1}>
            {abbreviate(repository.forkCount, 1)} Forks
          </Box>
        </Flex>
      </Flex>
    </LinkBox>
  )
}

export default RepositoryCard;