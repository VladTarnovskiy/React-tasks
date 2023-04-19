import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import { store } from '../../app/store';

describe('Search bar', () => {
  test('render SearchBar', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchBar = screen.getByPlaceholderText('Enter text');
    expect(searchBar).toBeInTheDocument();
  });

  test('should update the input value on change', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, ' here');
    expect(input).toHaveValue('nature here');
  });
});
