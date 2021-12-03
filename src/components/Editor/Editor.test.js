import { render } from '@testing-library/react';
import Editor from './Editor';

test('renders the Editor panel', () => {
  const container = render(<Editor leg="foot-pant" />);
  expect(container).toMatchSnapshot();
});
