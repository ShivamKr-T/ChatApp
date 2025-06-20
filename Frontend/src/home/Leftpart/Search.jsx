import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className='h-[10vh]'>
        <div className='px-6 py-4'>
            <form action="">
                <div className='flex space-x-3'>
                    <label className="input bg-slate-700 rounded-3xl">
                        <input 
                            type="text" 
                            className='grow outline-none'
                            placeholder="Search" 
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