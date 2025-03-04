import { render, screen, waitFor } from '@testing-library/react';
import ScoreIndex from './../pages/index';
import { AllProviders } from '@/test/utils';
import axios from 'axios';

jest.mock('axios');

describe('Scores Index Page', () => {
  it('Renders heading', async () => {
    render(
      <AllProviders>
        <ScoreIndex />
      </AllProviders>
    );
    await waitFor(() => {
      const headingElement = screen.getByText(/music scores/i);
      expect(headingElement).toBeInTheDocument();
    });
  });
  it('Renders create music sheet button', () => {
    render(
      <AllProviders>
        <ScoreIndex />
      </AllProviders>
    );
    const buttonElement = screen.getByText(/create sheet music/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it('Renders an empty message when there are no items', () => {
    render(
      <AllProviders>
        <ScoreIndex />
      </AllProviders>
    );
    const text = screen.getByText(/no sheet music found/i);
    expect(text).toBeInTheDocument();
  });
  it('Renders a list of records', async () => {
    const records = [
      { id: 1, title: 'Fur Elise' },
      { id: 1, title: 'River Flows in You' }
    ];

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: records });

    render(
      <AllProviders>
        <ScoreIndex />
      </AllProviders>
    );
    for (const record of records) {
      const recordItem = await screen.findByText(new RegExp(record.title, 'i'));
      expect(recordItem).toBeInTheDocument();
    }
  });
});
