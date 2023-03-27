import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header text', () => {
  test('Home', () => {
    render(<Header title="Home" />);
    const homeElement = screen.getByText('Home');
    expect(homeElement).toBeInTheDocument();
  });
  test('About Us', () => {
    render(<Header title="About Us" />);
    const aboutElement = screen.getByText('About Us');
    expect(aboutElement).toBeInTheDocument();
  });
  test('Not Found', () => {
    render(<Header title="Not Found" />);
    const notFound = screen.getByText('Not Found');
    expect(notFound).toBeInTheDocument();
  });
});
