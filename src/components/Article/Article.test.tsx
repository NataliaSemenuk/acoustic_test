import { render, screen } from '@testing-library/react';

import Article from './Article';

test('renders Article elements', async () => {
  render(<Article />);

  const date = screen.findByLabelText('The date of publication');
  const heading = screen.findByLabelText('The article title');
  const authorName = screen.findByLabelText('The author name');
  const article = screen.findByLabelText('The main text of the article');

  expect(await date).toBeInTheDocument();
  expect(await heading).toBeInTheDocument();
  expect(await authorName).toBeInTheDocument();
  expect(await article).toBeInTheDocument();
});