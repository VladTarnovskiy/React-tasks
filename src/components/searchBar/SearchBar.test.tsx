import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('Search bar', () => {
  test('render SearchBar', () => {
    render(<SearchBar />);

    const searchBar = screen.getByPlaceholderText('Enter text');
    expect(searchBar).toBeInTheDocument();
  });

  test('should update the input value on change', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, 'here');
    expect(input).toHaveValue('here');
  });

  test('click submit search bar', async () => {
    render(<SearchBar />);

    await userEvent.click(screen.getByTestId('submit-search'));
    expect(localStorage.getItem('searchValue')).toBe('here');
  });
  test('keyboard submit search bar', async () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, '{enter}');
    expect(localStorage.getItem('searchValue')).toBe('here');
  });
});
