'use client'
import LoginSideBarImage from './components/LoginSideBarImage';
import { LoginForm } from './LoginForm';

export default function Login() {
  return (
    <main className='flex h-screen'>
      <LoginSideBarImage />
      <div className='flex-1 flex items-center justify-center'>
        <LoginForm/>
      </div>
    </main>
  );
}
