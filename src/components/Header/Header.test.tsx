import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header text', () => {
  test('Home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const homeElement = screen.getByText('Home');
    expect(homeElement).toBeInTheDocument();
  });
  test('About Us', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <Header />
      </MemoryRouter>
    );
    const homeElement = screen.getByText('About Us');
    expect(homeElement).toBeInTheDocument();
  });
  test('Home', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Header />
      </MemoryRouter>
    );
    const homeElement = screen.getByText('Forms');
    expect(homeElement).toBeInTheDocument();
  });
});
