"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function AddTopic() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required')
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
      })
      if (res.ok) {
        router.refresh()
        router.push('/')
      } else {
        throw new Error('Failed to create topic')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-white p-10'>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Topic Title'
          className='border border-slate-500 text-black px-8 py-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder='Topic Description'
          className='border border-slate-500 px-8 py-2 text-black'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit' className='bg-green-500 text-white px-8 py-1 font-bold w-fit'>Add Topic</button>
      </form>
    </div>
  )
}

export default AddTopic;
