import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

function Chatuser() {
  const handleClick = () => {
    // alert("Three dots clicked!");
    // You can open a dropdown menu or modal here
  };

  return (
    <div className='flex items-center justify-between h-[10vh] bg-slate-700 hover:bg-slate-600 duration-300 px-4'>
      <div className='flex space-x-3 items-center'>
        <div className="avatar avatar-online">
          <div className="w-15 rounded-full ml-4 mt-2 mb-2">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div>
          <h1 className='text-xl'>Shivam</h1>
          <span className='text-sm'>Online</span>
        </div>
      </div>
      <button onClick={handleClick} className="p-2 rounded-full hover:bg-slate-500">
        <BsThreeDotsVertical className='text-2xl' />
      </button>
    </div>
  );
}

export default Chatuser;
