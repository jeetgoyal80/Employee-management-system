import React from 'react';
import Header from '../others/Header';
import Tasksbox from '../others/Tasksbox';
import Tasklist from '../others/Tasklist';

const EmployeeDashboard = ({ data }) => {
  console.log(data);

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 bg-[#1C1C1C] text-white overflow-x-hidden">
      <Header data={data} />

      <div className="mt-6">
        <Tasksbox data={data} />
      </div>

      <div className="mt-6">
        <Tasklist data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
