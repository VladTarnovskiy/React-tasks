import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

describe('App', () => {
  test('App text', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const homeElement = screen.getByText('Go Home');
    expect(homeElement).toBeInTheDocument();
  });
});
