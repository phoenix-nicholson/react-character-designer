import { render } from '@testing-library/react';
import Preview from './Preview';

test('renders the Preview panel', () => {
  const container = render(<Preview leg="leg-pants" />);
  expect(container).toMatchSnapshot();
});
