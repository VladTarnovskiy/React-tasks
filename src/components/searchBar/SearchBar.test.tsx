import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search bar', () => {
  const x = (test: string): void => {
    throw new Error(test);
  };
  test('render SearchBar', () => {
    render(<SearchBar onSearch={x} />);

    const searchBar = screen.getByPlaceholderText('Enter text');
    expect(searchBar).toBeInTheDocument();
  });
  //   test('button render', () => {
  //     render(<SearchBar onSearch={x} />);
  //     expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  //     expect(screen.getByRole('button')).toBeInTheDocument();
  //   });
});
