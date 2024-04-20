import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Feedback } from './Feedback.tsx';
/**
 * @jest-environment jsdom
 */

test('modal component', () => {
  render(<Feedback />);

  const inputTitle = screen.getByText('Молодцы!');
  expect(inputTitle).toBeInTheDocument();
});
