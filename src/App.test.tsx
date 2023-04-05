import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('App text', () => {
    render(<App />);
    const homeElement = screen.getByText('Go Home');
    expect(homeElement).toBeInTheDocument();
  });
});
