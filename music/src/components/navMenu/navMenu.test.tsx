import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import NavMenu from './navMenu';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../..//hooks';
import ReduxProvider from '@/store/ReduxProvider';

// Mock the useRouter and useAppSelector hooks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../..//hooks', () => ({
  useAppSelector: jest.fn(),
}));

describe('NavMenu', () => {
  beforeEach(() => {
    // Mock the useRouter hook to return a mock router object
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    // Mock the useAppSelector hook to return a mock state
    useAppSelector.mockReturnValue({
      auth: {
        tokens: {
          access: 'mockAccessToken',
          refresh: 'mockRefreshToken',
        },
      },
    });
  });

  it('should navigate to /tracks/myTrack when user is authenticated', () => {
    render(
    <ReduxProvider>
          <NavMenu />
    </ReduxProvider>
);

    // Моделируем событие щелчка.
    const myPlaylistButton = screen.getByText('Мой плейлист');
    fireEvent.click(myPlaylistButton);

    // Проверяем путь вызова.
    expect(useRouter().push).toHaveBeenCalledWith('/tracks/myTrack');
  });

  it('should navigate to / and show alert when user is not authenticated', () => {
    // Изменяем хук useAppSelector, чтобы вернуть состояние без токенов
    useAppSelector.mockReturnValue({
      auth: {
        tokens: {
          access: null,
          refresh: null,
        },
      },
    });

    // Mock the alert function
    global.alert = jest.fn();

    render(
        <ReduxProvider>
              <NavMenu />
        </ReduxProvider>
    );

    // Моделируем событие щелчка.
    const myPlaylistButton = screen.getByText('Мой плейлист');
    fireEvent.click(myPlaylistButton);

     // Проверяем путь вызова.
    expect(useRouter().push).toHaveBeenCalledWith('/');

    // Проверяем сообшение об ошибке
    expect(global.alert).toHaveBeenCalledWith('Вы не авторизованы!');
  });
});