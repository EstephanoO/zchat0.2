'use client'

import { Button } from '@/components/ui/button';
import db from '@/lib/db';
import { useRouter } from 'next/navigation';
import React from 'react';

function LoginPage() {
  const route = useRouter();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState('');


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await db.client.collection('users').authWithOAuth2({ provider: 'google' });
        const result =await db.client.collection('users').update(data?.record.id, { avatarUrl: data.meta?.avatarUrl, name: data.meta?.name});
        const response = await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(result)
        });
        const newData=  await response.json();
      if (newData) {
        route.push('/');

      } else {
        setError('Usuario no Identificado');
      }
    } catch (err) {
      setError('Usuario no Identificado');
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-700 to-white">
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 p-10 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold font-sans  text-gray-800 py-3 pb-8">ZCHAT</h1>
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
          </div>
          <Button
            type="submit"
            className="w-[250px] bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition duration-300"
            size='icon'
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Google Auth
          </Button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
