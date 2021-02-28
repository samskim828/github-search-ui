import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
      <Input type="text" placeholder="Search this user's repositories..." />
    </InputGroup>
  )
}

export default SearchBar;