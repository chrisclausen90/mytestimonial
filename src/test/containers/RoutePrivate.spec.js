/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import RoutePrivate from './RoutePrivate';

test('renders learn react link', () => {
  render(<RoutePrivate />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
