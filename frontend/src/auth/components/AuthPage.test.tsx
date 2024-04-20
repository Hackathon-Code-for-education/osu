import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthPage } from './AuthPage.tsx';
import { expect } from 'vitest';
/**
 * @jest-environment jsdom
 */

test('load auth component', () => {
  render(<AuthPage />);

  const login = screen.getByText('Логин');
  const password = screen.getByText('Пароль');

  expect(login).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});

test('enable input password data', () => {
  render(<AuthPage />);

  const input = screen.getByTestId('password-test');

  fireEvent.change(input, { target: { value: 'text' } });
  // @ts-ignore
  expect(input.value).toBe('text');
});

test('enable input login data', () => {
  render(<AuthPage />);

  const input = screen.getByTestId('login-test');

  fireEvent.change(input, { target: { value: 'text' } });
  // @ts-ignore
  expect(input.value).toBe('text');
});
