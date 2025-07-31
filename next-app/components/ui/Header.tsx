import React from 'react'
import Link from 'next/link'
import { FilePen,BookOpen } from 'lucide-react'
const Header = () => {
  return (
    <header className='relative p-16 text-center'>
    <Link href ="/">
    <h1 className='lg:text-6xl text-3xl font-black mb-5'>StoryTeller AI</h1>
    <div className=' flex items-center justify-center '>
       
    
        <h2 className='text-2xl lg:text-4xl md:text-3xl color-black font-medium'>Bringing your stories <span className=' text-white bg-purple-500 hover:bg-600 rounded-sm p-1'>To Life!</span></h2>
        
    </div>
     </Link>
     {/*Nav icons */}
     <div className='absolute right-10 top-10 flex items-center justify-center space-x-2'>
       <Link href="/"></Link>
       <FilePen className='h-10 w-10 lg:h-12 lg:w-12 mx-auto text-purple-500 border-purple-500 p-2 rounded-md cursor-pointer'/>
       <Link href="/">
       <BookOpen className='h-10 w-10 lg:h-12 lg:w-12 mx-auto text-purple-500 border-purple-500 p-2 rounded-md cursor-pointer'/></Link>
     </div>
    </header>
  )
}

export default Header
