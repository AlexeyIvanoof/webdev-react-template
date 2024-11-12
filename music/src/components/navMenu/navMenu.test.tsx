import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavMenu from "../navMenu/navMenu";
import { useAppSelector } from '../../hooks';
import { useRouter } from 'next/navigation';
import ReduxProvider from '@/store/ReduxProvider';

// Mocking dependencies
jest.mock('../../hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('NavMenu', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      auth: {
        tokens: {
          access: 'mockAccessToken',
          refresh: 'mockRefreshToken',
        },
      },
    });

    useRouter.mockReturnValue({
      push: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('переключает видимость меню при нажатии на бургер', () => {
    render(
      <ReduxProvider>
      <NavMenu />
      </ReduxProvider>);

    // Изначально меню не должно быть видно
    expect(screen.queryByText('Главное'));
    expect(screen.queryByText('Мой плейлист'));
    expect(screen.queryByText('Войти'));

    // Нажмем на бургер-меню, чтобы переключить видимость.
    const burgerMenu = screen.getByRole('button', { name: '' }); // Предположим, что бургер-меню представляет собой кнопку без текста.
    fireEvent.click(burgerMenu);

    // После нажатия должно появиться меню.
    expect(screen.getByText('Главное'));
    expect(screen.getByText('Мой плейлист'));
    expect(screen.getByText('Войти'));

    // Нажмем на бургер-меню еще раз, чтобы скрыть меню.
    fireEvent.click(burgerMenu);

    // После повторного нажатия меню не должно быть видно.
    expect(screen.queryByText('Главное'));
    expect(screen.queryByText('Мой плейлист'));
    expect(screen.queryByText('Войти'));
  });

});