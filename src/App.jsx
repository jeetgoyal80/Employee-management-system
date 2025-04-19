import React, { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserinfo, setloggedInUserinfo] = useState(null);
  const userdata = useContext(AuthContext);

  useEffect(() => {
    const loggedInUserStr = localStorage.getItem('loggedInUser');
    if (loggedInUserStr) {
      const loggedInUser = JSON.parse(loggedInUserStr);
      if (loggedInUser.role === 'admin') {
        setUser('admin');
      } else if (loggedInUser.role === 'employee') {
        setUser('employee');
        setloggedInUserinfo(loggedInUser.user);
      }
    }
  }, []);

  const userhandle = (email, password) => {
    if (!userdata) {
      alert("User data not loaded yet.");
      return;
    }

    const admin = userdata.admin.find(e => email === e.email && password === e.password);
    if (admin) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }

    const employee = userdata.employees.find(e => email === e.email && password === e.password);
    if (employee) {
      setloggedInUserinfo(employee);
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', user: employee }));
      return;
    }

    alert('Invalid credentials');
  };

  return (
    <>
      {!user ? (
        <Login userhandle={userhandle} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUserinfo} />
      ) : null}

      {/* 👇 Toast container must be here to show toasts from anywhere */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
