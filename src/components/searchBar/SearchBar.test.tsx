import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('Search bar', () => {
  const x = (test: string): void => {
    // eslint-disable-next-line no-console
    console.log(test);
  };
  test('render SearchBar', () => {
    render(<SearchBar onSearch={x} />);

    const searchBar = screen.getByPlaceholderText('Enter text');
    expect(searchBar).toBeInTheDocument();
  });

  test('should update the input value on change', async () => {
    render(<SearchBar onSearch={x} />);
    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, 'here');
    expect(input).toHaveValue('here');
  });

  test('click submit search bar', async () => {
    render(<SearchBar onSearch={x} />);

    await userEvent.click(screen.getByTestId('submit-search'));
    expect(localStorage.getItem('searchValue')).toBe('here');
  });
  test('keyboard submit search bar', async () => {
    render(<SearchBar onSearch={x} />);

    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, '{enter}');
    expect(localStorage.getItem('searchValue')).toBe('here');
  });
});
