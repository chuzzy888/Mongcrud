import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 mt-4'>
    <Link href={'/'} className='text-white font-bold' >MongCrud</Link>
    <Link href={'/AddTopic'} className='bg-white p-1 px-2 hover:text-slate-600 font-bold rounded text-black'>Add Topic</Link>
   </nav>
  )
}

export default Navbar
