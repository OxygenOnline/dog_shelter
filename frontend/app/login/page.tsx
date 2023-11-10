'use client'

import Link from 'next/link';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="mb-3 text-6xl font-bold p-12">Login</h1>
      <LoginForm />
      <div>
        <p className="pt-12">Not a user? Register <Link href='/register' className='hover:font-semibold'>here</Link></p>
      </div>
    </main>
  );
};

export default LoginPage;
