import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupPage from './Signup';
import { RegistrationApi } from '../../api/api';
import ReduxProvider from '@/store/ReduxProvider';

// Mock the RegistrationApi function
jest.mock('../../api/api', () => ({
  RegistrationApi: jest.fn(),
}));

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('SignupPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('должно отображать ошибку, если пароли не совпадают', async () => {
    render(
        <ReduxProvider>
        <SignupPage />
        </ReduxProvider>
          );
    const emailInput = screen.getByPlaceholderText('Почта');
    const passwordInput = screen.getByPlaceholderText('Пароль');
    const repeatPasswordInput = screen.getByPlaceholderText('Подтвердите пароль');
    const registerButton = screen.getByText('Зарегистрироваться');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password456' } });

    fireEvent.click(registerButton);

  });

  it('следует вызвать RegistrationApi и перейти на страницу входа, если пароли совпадают.', async () => {
    const mockPush = jest.fn();
    require('next/navigation').useRouter.mockReturnValue({ push: mockPush });

    (RegistrationApi as jest.Mock).mockResolvedValueOnce(true);

    render(
    <ReduxProvider>
    <SignupPage />
    </ReduxProvider>
          );

    const emailInput = screen.getByPlaceholderText('Почта');
    const passwordInput = screen.getByPlaceholderText('Пароль');
    const repeatPasswordInput = screen.getByPlaceholderText('Подтвердите пароль');
    const registerButton = screen.getByText('Зарегистрироваться');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(RegistrationApi).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
      expect(mockPush).toHaveBeenCalledWith('/signin');
    });
  });

  it('должно отображать ошибку, если RegistrationApi выдает ошибку', async () => {
    const errorMessage = 'Registration failed';
    (RegistrationApi as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    render(
        <ReduxProvider>
        <SignupPage />
        </ReduxProvider>
          );

    const emailInput = screen.getByPlaceholderText('Почта');
    const passwordInput = screen.getByPlaceholderText('Пароль');
    const repeatPasswordInput = screen.getByPlaceholderText('Подтвердите пароль');
    const registerButton = screen.getByText('Зарегистрироваться');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(repeatPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(registerButton);

  });
});