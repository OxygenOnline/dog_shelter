'use client'

import Link from 'next/link';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="mb-3 text-6xl font-bold p-12">Register</h1>
      <RegisterForm />
      <div>
        <p className="pt-12">Already a user? Login <Link href='/login' className='hover:font-semibold'>here</Link></p>
      </div>
    </main>
  );
};

export default RegisterPage;
