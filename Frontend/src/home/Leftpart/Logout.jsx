import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

function Logout() {
  return (
    <div className='h-[10vh] bg-slate-700 flex items-center'>
        <RiLogoutBoxLine className="text-5xl text-white hover:bg-slate-500 rounded-full duration-300 px-2 py-2 mt-1 ml-2"/>
    </div>
  )
}

export default Logout