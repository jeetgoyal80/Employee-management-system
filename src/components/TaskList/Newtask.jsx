import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Newtask = ({ element }) => {
  const [userdata, setUserdata] = useContext(AuthContext);

  if (!userdata || !userdata.employees) {
    console.log("User data not loaded yet.");
    return null;
  }







  const Acceptreq = () => {
    const id = (JSON.parse((localStorage.getItem('loggedInUser'))).user.Id)-1;
  
    // Safeguard check
    if (!id || !userdata.employees[id]) {
      console.error("Invalid user ID or employee data not found.");
      return;
    }
  
    // Get current employee data
    const employeedata = userdata.employees[id];
  
    // Create updated employee data
    const updatedEmp = {
      ...employeedata,
      newTaskCount: (employeedata.newTaskCount ) - 1,
      activeCount: (employeedata.activeCount ) + 1,
      // Uncomment this if needed:
      // tasks: {
      //   ...employeedata.tasks,
      //   newTask: false,
      //   active: true,
      // },
    };
  
    // Clone and update employees object only for the specific ID
    const updatedEmployees = {
      [id]: updatedEmp,
      ...userdata.employees,
    };
  
    // Set updated userdata with updated employees
    setUserdata({
      ...userdata,
      employees: updatedEmployees,
    });
  };

  return (
    <div
      className="mt-6 bg-gradient-to-br from-blue-400 to-red-600 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px] xl:w-[520px] rounded-2xl text-white p-6 flex flex-col shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="bg-red-800 px-3 py-1 rounded-full text-xs font-medium">
          {element.category}
        </span>
        <span className="text-sm opacity-80">{element.date}</span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          {element.title}
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-white/90">
          {element.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          onClick={Acceptreq}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default Newtask;
