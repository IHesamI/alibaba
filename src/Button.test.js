import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

/**
 * @jest-environment jsdom
 */

test('renders the button and handles click', () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock}>Click Me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});