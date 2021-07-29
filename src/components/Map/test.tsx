import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /A JS library for interactive maps/i })
    ).toBeInTheDocument();
  });

  it('should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Minha bela cidade',
      slug: 'city',
      location: {
        latitude: 0,
        longitude: 0
      }
    };
    render(<Map places={[place]} />);

    expect(screen.getByTitle(/Minha bela cidade/i)).toBeInTheDocument();
  });
});
