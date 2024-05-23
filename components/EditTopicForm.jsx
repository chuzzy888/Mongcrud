'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function EditTopicForm({ id, title, description }) {
    const [newTitle, setnewTitle] = useState(title);
    const [newDescription, setnewDescription] = useState(description);
    const router = useRouter();

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, { 
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            })
            if (!res.ok) {
                throw new Error('failed to update topic');
            }
            router.refresh()
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-white p-10'>
            <form action="" className='flex flex-col gap-3' onSubmit={handlesubmit}>
                <input type="text" placeholder='Topic Title' className='border border-slate-500 px-8 py-2 text-black' onChange={(e) => setnewTitle(e.target.value)} value={newTitle} />
                <input type="text" placeholder='Topic Description' className='border border-slate-500 px-8 py-2 text-black' onChange={(e) => setnewDescription(e.target.value)} value={newDescription} />
                <button className='bg-green-500 text-white px-8 py-1 font-bold w-fit' type='submit'>Update Topic</button>
            </form>
        </div>
    )
}

export default EditTopicForm
