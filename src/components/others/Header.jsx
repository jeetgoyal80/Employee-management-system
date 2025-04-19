import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';


const Header = ({ data }) => {
  const [username, setUsername] = useState('');
  

  useEffect(() => {
    if (!data) {
      setUsername('Admin');
    } else {
      setUsername(data.firstName);
    }
  }, [data]);
  const logoutuser = ()=>{
    localStorage.setItem('loggedInUser','');
    toast.success("Logout Successfully");
    setTimeout(() => {
      
          window.location.reload();
    }, 1000);

  }

  

  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-white text-2xl'>
        Hello<br /><span className='text-3xl font-semibold'>{username} 👋</span> 
      </h2>
      <button className='text-white h-10 rounded font-medium bg-red-600 px-4' onClick={logoutuser}>
        Logout
      </button>
    </div>
  );
};

export default Header;
