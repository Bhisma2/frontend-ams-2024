'use client'

import React from 'react'

type Event = {
    _id: string;
    title: string;
    description: string;
}

export default function EventPage() {
    const [events, setEvents] = React.useState<Event[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const getEvents = async () => {
        const ENV = process.env.NEXT_PUBLIC_BACKEND_ENV;
        try {
            const res = await fetch(`${ENV}/api/events`);
            if (!res.ok) {
                throw new Error('Hmm apinya ngga kepanggil');
            }
            const data = await res.json();
            setEvents(data.data);
            setError(null);
        } catch (err) {
            setError('Ada kesalahan: ' + err);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        getEvents();
    }, []);

    if (error) return <h2 className='p-10 text-center text-red-500'>{error}</h2>;

    return (
        <div className='p-10 flex justify-center'>
            <div className='w-full max-w-7xl rounded-lg shadow-lg p-8 bg-yellow-500'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h2 className='text-3xl font-bold'>Events</h2>
                </div>
                {loading ? (
                    <h3 className='mt-20 text-center'>
                        Loading...
                    </h3>
                ) : (
                    <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {events.map((event) => (
                            <div key={event._id} className='flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 justify-between'>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800'>{event.title}</h3>
                                    <p className='text-gray-600 mt-2'>{event.description}</p>
                                </div>
                                <button className='mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors'>
                                    Selengkapnya
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}
