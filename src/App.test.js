import { render, screen } from '@testing-library/react';
import App from './App';
/* tests don't need the server */

test('renders GitHub repository link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('home-link');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('home-link');
  expect(linkElement.href).toContain('https://github.com/zayrarepositor');
});
