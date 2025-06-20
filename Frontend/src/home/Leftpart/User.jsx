import React from 'react'

function User() {
  return (
    <div>
        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-600 duration-300 cursor-pointer'>
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <h1 className='py-3 font-bold'>Shivam</h1>
        </div>
    </div>
  )
}

export default User