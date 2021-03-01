import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from '.'

test('change user input', () => {
  const handleChange = jest.fn();
  const results = render(<SearchBar onChange={handleChange} />);
  const searchBarInput = results.getByTestId('search-bar-input');

  fireEvent.change(searchBarInput, { target: { value: 'a' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(searchBarInput.value).toBe('a');
})