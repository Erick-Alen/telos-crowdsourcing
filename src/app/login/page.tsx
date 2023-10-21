'use client';
import { useState } from 'react';
import LoginSideBarImage from './components/LoginSideBarImage';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export type LoginPageActionTypes = 'login' | 'register';

type LoginPageAction = {
  component: React.ReactNode;
};

type LoginPageActions = {
  [key in LoginPageActionTypes]: LoginPageAction;
};

type LoginPageState = {
  actionType: LoginPageActionTypes;
};

export default function Login() {
  const [state, setState] = useState<LoginPageState>({
    actionType: 'login',
  });

  const handleSetAction = (action: LoginPageActionTypes) => {
    setState({ actionType: action });
  }

  const actions: LoginPageActions = {
    login: {
      component: <LoginForm handleSetAction={handleSetAction} />,
    },
    register: {
      component: <RegisterForm handleSetAction={handleSetAction} />,
    },
  };

  return (
    <main className='flex h-screen-navbar'>
      <LoginSideBarImage />
      <div className='flex-1 flex items-center justify-center'>
        {/* <LoginForm /> */}
        {/* <RegisterForm /> */}
        {actions[state.actionType].component}
      </div>
    </main>
  );
}
