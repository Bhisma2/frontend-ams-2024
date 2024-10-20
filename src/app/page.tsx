import Link from 'next/link';
import React from 'react';

export default function Homepage() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <header className='bg-yellow-500 text-white p-4 shadow-md'>
        <h1 className='text-2xl font-bold text-center'>Welcome to AMS 2024</h1>
      </header>
      <main className='flex-1 p-6 space-y-6'>
        <section className='bg-white p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-semibold'>AMS 2024</h2>
          <p>
            Sebagai wadah untuk mengenalkan dan
            mengajarkan trend dan inovasi terbaru dalam media digital kepada peserta
          </p>
        </section>
        <section className='bg-white p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-semibold'>Bentuk Kegiatan</h2>
          <p>
            Bentuk kegiatan Advance Media Schooling ini akan diselenggarakan dalam bentuk
            workshop yang akan dilakukan secara offline selama 1 hari. Pada kegiatan tersebut,
            pembicara akan memaparkan materi kepada peserta dan juga memberikan simulasi atau
            praktik langsung kepada peserta. Kemudian akan dilanjutkan dengan sesi tanya-jawab bagi
            para peserta di penghujung materi.
          </p>
        </section>

        <section className='bg-white p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-semibold'>Overview</h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>Framework Tailwind CSS</li>
            <li>Pemahanan Node JS</li>
            <li>Penggunaan React JS - Next JS</li>
            <li>Penggunaan MongoDB sebagai database</li>
            <li>Deployment dengan Vercel</li>
          </ul>
        </section>

        <div className='w-full flex justify-center gap-10'>
          <Link href='/events' className='bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 active:bg-yellow-700'>
            Events
          </Link>
          <Link href='/create-events' className='bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 active:bg-yellow-700'>
            Buat Events
          </Link>
        </div>
      </main>
      <footer className='bg-yellow-500 text-white p-4 text-center'>
        <p>&copy; 2024 AMS - BEM FTEIC</p>
      </footer>
    </div>
  );
}
