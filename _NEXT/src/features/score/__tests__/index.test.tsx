import { render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import ScoreIndex from './../pages/index';
import { AllProviders } from '@/test/utils';
import axios from 'axios';
import { useRouter } from 'next/router';

jest.mock('axios');
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

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
  it('Allows me to create new music sheet', async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    render(
      <AllProviders>
        <ScoreIndex />
      </AllProviders>
    );
    const buttonElement = screen.getByText(/create sheet music/i);
    await useEvent.click(buttonElement);
    // expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/score/create');
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
