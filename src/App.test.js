import { render, screen } from '@testing-library/react';
import App from './App';
/* tests don't need the server */

test('renders GitHub repository link', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub repository/i);
  expect(linkElement).toBeInTheDocument();
});
