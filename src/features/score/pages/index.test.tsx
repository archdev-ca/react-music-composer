import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import ScoreIndex from '.';

describe('Scores Index Page', () => {
  it('Renders heading', () => {
    render(<ChakraProvider value={defaultSystem}><ScoreIndex /></ChakraProvider>);
    const headingElement = screen.getByText(/music scores/i);
    expect(headingElement).toBeInTheDocument();
  });
});