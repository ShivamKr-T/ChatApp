import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/AuthProvider';
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from './components/Loading';

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            authUser?(
              <div className='flex h-screen'>
                <Left/>
                <Right/>
              </div>
            )
            : (
              <Navigate to={"/signup"}/>
            )
        } />
        <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>} />
        <Route path='/signup' element={authUser?<Navigate to="/"/>:<Signup/>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App