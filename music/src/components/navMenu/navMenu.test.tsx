import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavMenu from "../navMenu/navMenu";
import { useAppSelector } from '../../hooks';
import { useRouter } from 'next/navigation';
import ReduxProvider from '@/store/ReduxProvider';


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

  
    expect(screen.queryByText('Главное'));
    expect(screen.queryByText('Мой плейлист'));
    expect(screen.queryByText('Войти'));

   
    const burgerMenu = screen.getByRole('button', { name: '' }); 
    fireEvent.click(burgerMenu);

    
    expect(screen.getByText('Главное'));
    expect(screen.getByText('Мой плейлист'));
    expect(screen.getByText('Войти'));

    
    fireEvent.click(burgerMenu);

    
    expect(screen.queryByText('Главное'));
    expect(screen.queryByText('Мой плейлист'));
    expect(screen.queryByText('Войти'));
  });

});