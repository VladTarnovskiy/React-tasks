import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { CardData } from '../../types/types';

describe('Form', () => {
  const x = (card: CardData): void => {
    // eslint-disable-next-line no-console
    console.log(card);
    throw new Error('Function not implemented.');
  };
  test('Form', () => {
    render(<Form addCard={x} />);
    const homeElement = screen.getByText('Personal data');
    expect(homeElement).toBeInTheDocument();
  });

  test('user must enter name, created, status, image', async () => {
    render(<Form addCard={x} />);

    await userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter name!')).toBeInTheDocument();
    expect(screen.getByText('Enter your birthday!')).toBeInTheDocument();
    expect(screen.getByText('Choose gender!')).toBeInTheDocument();
    expect(screen.getByText('Choose your photo!')).toBeInTheDocument();
    expect(
      screen.getByText('To continue agree to the processing of your data!')
    ).toBeInTheDocument();
  });

  test('Name with capital letter', async () => {
    render(<Form addCard={x} />);

    await userEvent.type(screen.getByTestId('input-name'), 'jack');
    await userEvent.click(screen.getByTestId('submit'));
    expect(screen.getByText('Your name should start with a capital letter!')).toBeInTheDocument();
  });

  test('submit card', async () => {
    render(<Form addCard={x} />);

    await userEvent.type(screen.getByTestId('input-name'), 'Name');
    await userEvent.type(screen.getByTestId('input-date'), '02/02/2022');
    await userEvent.type(screen.getByTestId('input-country'), 'Belarus');
    await userEvent.type(screen.getByTestId('input-vehicle'), 'car');
    await userEvent.type(screen.getByTestId('input-gender'), 'male');
    await userEvent.type(screen.getByTestId('input-file'), 'noname.png');
    await userEvent.type(screen.getByTestId('input-rule'), 'rule');
    await userEvent.click(screen.getByTestId('submit'));
    expect(screen.getByText('Data saved!')).toBeInTheDocument();
  });
});
