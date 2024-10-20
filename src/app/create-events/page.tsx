'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function LoginPage() {
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-expect-error - hmm
        const title = (e.currentTarget.title as HTMLInputElement).value;
        const description = (e.currentTarget.description as HTMLInputElement).value;
        const ENV = process.env.NEXT_PUBLIC_BACKEND_ENV;

        try {
            const res = await fetch(`${ENV}/api/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title, description
                }),
            })
            const data = await res.json();
            setError('');
            if (data) router.push('/events');
        } catch {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='w-[400px] rounded-lg shadow-lg p-8 bg-white relative'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    <h2 className='text-3xl font-bold text-yellow-600'>AMS 2024</h2>
                    <p className='text-gray-500'>Buat Event Kamu</p>
                </div>
                <form method='POST' onSubmit={handleSubmit} className='w-full mt-6 space-y-4'>
                    <input
                        className='outline-none border border-gray-300 rounded-md px-4 py-2 w-full text-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400'
                        placeholder='Nama Event'
                        id='title'
                        name='title'
                        type='text'
                    />
                    <input
                        className='outline-none border border-gray-300 rounded-md px-4 py-2 w-full text-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400'
                        placeholder='Deskripsi'
                        id='description'
                        name='description'
                        type='text'
                    />
                    <button
                        className='w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 active:bg-yellow-700 transition-colors'
                        id='login'
                        name='login'
                        type='submit'
                    >
                        Tambahkan Event
                    </button>
                </form>
            </div>
        </div>
    )
}
