import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

function User({user}) {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-600 duration-300 cursor-pointer'>
            <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
                <div className="w-12 rounded-full">
                    <img src={`https://img.icons8.com/?size=100&id=84020&format=png&color=${isOnline ? "21b310" : "ffffff"}`}  />
                </div>
            </div>
            <h1 className='py-3 font-bold'>{user.fullname}</h1>
        </div>
    </div>
  )
}

export default User