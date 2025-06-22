import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'

function Users() {
  const [allUsers,loading]=useGetAllUsers();
  console.log(allUsers)
  return (
    <div>
        <h1 className='px-8 py-2 text-white font-semibold bg-slate-700'>
            Messages
        </h1>
        <div 
            className='py-2 overflow-y-hidden hover:overflow-y-auto scroll-container'
            style={{maxHeight:"calc(84vh - 10vh"}}
        >
          {allUsers.map((user,index)=>(
              <User key={index} user={user}/>
            ))}
        </div>
    </div>
  )
}

export default Users