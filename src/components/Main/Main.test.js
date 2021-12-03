import { render } from '@testing-library/react';
import Editor from './Main';

test('renders the Main panel', () => {
  const container = render(<Editor />);
  expect(container).toMatchSnapshot();
});
