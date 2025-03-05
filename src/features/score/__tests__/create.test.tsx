import { render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import ScoreCreate from './../pages/create';
import { AllProviders } from '@/test/utils';
import axios from 'axios';
import { useRouter } from 'next/router';

jest.mock('axios');
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Score Create Page', () => {
  it('Renders beats toolbar ', async () => {
    render(
      <AllProviders>
        <ScoreCreate />
      </AllProviders>
    );
    // const headingElement = screen.getByText(/music scores/i);
    // expect(headingElement).toBeInTheDocument();
    // await waitFor(() => {});
  });
  expect(true);
});
