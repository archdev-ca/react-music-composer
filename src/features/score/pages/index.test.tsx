import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import ScoreIndex from '.';

describe('Scores Index Page', () => {
  it('Renders heading', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <ScoreIndex />
      </ChakraProvider>
    );
    const headingElement = screen.getByText(/music scores/i);
    expect(headingElement).toBeInTheDocument();
  });
  it('Renders create music sheet button', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <ScoreIndex />
      </ChakraProvider>
    );
    const buttonElement = screen.getByText(/create sheet music/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it('Renders an empty message when there are no items', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <ScoreIndex />
      </ChakraProvider>
    );
    const text = screen.getByText(/no sheet music found/i);
    expect(text).toBeInTheDocument();
  });
  it('Renders a list of records', async () => {
    const records = [
      { id: 1, title: 'Fur Elise' },
      { id: 1, title: 'River Flows in You' }
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(records)
      })
    ) as jest.Mock;

    render(
      <ChakraProvider value={defaultSystem}>
        <ScoreIndex />
      </ChakraProvider>
    );
    for (const record of records) {
      const recordItem = await screen.findByText(new RegExp(record.title, 'i'));
      expect(recordItem).toBeInTheDocument();
    }
  });
});
