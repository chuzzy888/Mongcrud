import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { FaRegEdit } from "react-icons/fa";


async function TopicList() {
  async function getData() {
    const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" })

    if (!res.ok) {
      throw new Error('unable to fetch')
    }
    return res.json()
  }

  const { topics } = await getData();

  return (
    <>
      {topics.map(display => (
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start' key={display._id}>
          <div>
            <h2 className='font-bold text-2xl text-white'>{display.title}</h2>
            <div className='text-white'>{display.description}</div>
          </div>
          <div className='flex gap-2'>
            <RemoveBtn  id={display._id}/>
            <Link href={`/editTopic/${display._id}`}><FaRegEdit className='text-lg text-white' /></Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default TopicList
