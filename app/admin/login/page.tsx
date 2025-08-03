'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Card, CardBody, Input, Button, CardHeader } from '@nextui-org/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false, 
        email,
        password,
      });

      if (result?.error) {
        setError('Email atau password salah. Silakan coba lagi.');
      } else if (result?.ok) {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="justify-center">
          <h1 className="text-2xl font-bold">Admin Login</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              isRequired
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isRequired
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-danger text-sm">{error}</p>}
            <Button type="submit" color="primary">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}