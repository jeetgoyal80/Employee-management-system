import React from 'react';

const Tasksbox = ({ data }) => {
  const taskStyles = [
    { color: 'bg-green-500', label: 'Active Task', count: data.activeCount },
    { color: 'bg-blue-500', label: 'New Task', count: data.newTaskCount },
    { color: 'bg-yellow-500', label: 'Complete Task', count: data.completedCount },
    { color: 'bg-red-500', label: 'Failed Task', count: data.failedCount },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-center md:justify-start mt-8">
      {taskStyles.map((task, index) => (
        <div
          key={index}
          className={`${task.color} w-[100%] sm:w-[48%] md:w-[45%] lg:w-[22%] rounded-2xl text-white p-5 shadow-md transition-transform hover:scale-105`}
        >
          <h1 className="font-bold text-3xl">{task.count}</h1>
          <h2 className="font-semibold text-lg mt-1">{task.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default Tasksbox;
