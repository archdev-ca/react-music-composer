import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import ScoreIndex from '.';

describe('Scores Index Page', () => {
  it('Renders heading', () => {
    render(<ChakraProvider value={defaultSystem}><ScoreIndex /></ChakraProvider>);
    const headingElement = screen.getByText(/music scores/i);
    expect(headingElement).toBeInTheDocument();
  });
  it('Renders create music sheet button', () => {
    render(<ChakraProvider value={defaultSystem}><ScoreIndex /></ChakraProvider>);
    const buttonElement = screen.getByText(/create sheet music/i);
    expect(buttonElement).toBeInTheDocument();
  });
});