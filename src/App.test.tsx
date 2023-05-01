import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';

describe('App', () => {
  test('App text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const homeElement = screen.getByText('Go Home');
    expect(homeElement).toBeInTheDocument();
  });
});
