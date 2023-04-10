/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import HomeCard from './HomeCard';

describe('Card Component', () => {
  const props = {
    card: {
      id: 24,
      likes: 23,
      description: 'It card',
      alt_description: 'It card',
      created_at: '2018-09-20T05:12:49Z',
      height: 2000,
      width: 2000,
      urls: {
        regular:
          'https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzI3Njd8MHwxfHNlYXJjaHwxfHxzcGFjZXxlbnwwfHx8fDE2ODEwNzkzMTA&ixlib=rb-4.0.3&q=85',
        small:
          'https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzI3Njd8MHwxfHNlYXJjaHwxfHxzcGFjZXxlbnwwfHx8fDE2ODEwNzkzMTA&ixlib=rb-4.0.3&q=85',
      },
      user: { name: 'Jack' },
      tags: [
        { type: 'landing_page', title: 'grey' },
        { type: 'landing_page', title: 'background' },
      ],
    },
  };

  test('Renders card with text', () => {
    render(<HomeCard {...props} />);
    const homeElement = screen.getByText('Name:');
    expect(homeElement).toBeInTheDocument();
  });
});
