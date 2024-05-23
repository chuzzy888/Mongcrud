'use client' ;
import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';

function RemoveBtn({id}) {
  const router = useRouter();

  const remove = async () => {
    const confirmed = confirm('are you sure you want to delete?')
    if(confirmed){
     const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE"
      })
      if(res.ok){
        router.refresh();
      }
     
    }
  }

  return (
    <button onClick={remove}>
      <MdOutlineDelete  className='text-xl text-red-500'/>
    </button>
  )
}

export default RemoveBtn
