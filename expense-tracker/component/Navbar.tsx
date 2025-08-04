import React from 'react'
import { checkUser } from '@/lib/checkUser'
function Navbar() {
    const user= checkUser();
  return (
    
    <div>
      Navabatr
    </div>
  )
}

export default Navbar

