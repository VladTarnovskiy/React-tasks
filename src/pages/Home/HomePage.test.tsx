import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './Home';
import { store } from '../../app/store';

describe('Header page', () => {
  test('Home', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const homeElement = screen.getByPlaceholderText('Enter text');
    expect(homeElement).toBeInTheDocument();
  });
});
