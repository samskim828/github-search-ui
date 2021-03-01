import React from 'react';
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {

  return (
    <InputGroup data-testid="search-bar-container">
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
      <Input type="text" placeholder="Search a user's repositories..." onChange={onChange} data-testid="search-bar-input" />
    </InputGroup>
  )
}

export default SearchBar;