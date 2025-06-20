import React from 'react'
import User from './User'

function Users() {
  return (
    <div>
        <h1 className='px-8 py-2 text-white font-semibold bg-slate-700'>
            Messages
        </h1>
        <div 
            className='py-2 overflow-y-hidden hover:overflow-y-auto scroll-container'
            style={{maxHeight:"calc(84vh - 10vh"}}
        >
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    </div>
  )
}

export default Users