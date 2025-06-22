import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
    const [search,setSearch]=useState("");
    const [allUsers] = useGetAllUsers();
    const { setSelectedConversation } = useConversation();
    console.log(allUsers);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = allUsers.find((user) =>
            user.fullname?.toLowerCase().includes(search.toLowerCase())
        );
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("User not found");
        }
    };
  return (
    <div className='h-[10vh]'>
        <div className='px-6 py-4'>
            <form onSubmit={handleSubmit}>
                <div className='flex space-x-3'>
                    <label className="input bg-slate-700 rounded-3xl">
                        <input 
                            type="text" 
                            className='grow outline-none'
                            placeholder="Search" 
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />
                    </label>
                    <button>
                        <FaSearch className='text-4xl p-1 hover:bg-slate-500 rounded-full duration-300' />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Search