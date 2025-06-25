import React, { useState } from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import toast from 'react-hot-toast';

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout",{},{
        withCredentials:true
      });
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Error in logging out");
    }
  };
  return (
    <div className='h-[10vh] bg-slate-700 flex items-center'>
        <RiLogoutBoxLine 
          className="text-5xl text-white hover:bg-slate-500 rounded-full duration-300 px-2 py-2 mt-1 ml-2"
          onClick={handleLogout}
        />
    </div>
  )
}

export default Logout