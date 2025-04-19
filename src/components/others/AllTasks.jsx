import React from 'react';
import { getLocalStorage } from '../../utils/localStorage';

const statusColor = {
  Pending: 'bg-yellow-400 text-yellow-900',
  'In Progress': 'bg-blue-400 text-blue-900',
  Completed: 'bg-green-400 text-green-900',
  Failed: 'bg-red-400 text-red-900',
};

const AllTasks = () => {
  const data = getLocalStorage()?.employees || [];

  // Flatten all tasks from all employees
  const allTasks = data.flatMap((emp) =>
    (emp.tasks || []).map((task) => ({
      ...task,
      assignedTo: emp.firstName || 'Unknown',
    }))
  );

  const getStatus = (task) => {
    if (task.completed) return 'Completed';
    if (task.active) return 'In Progress';
    if (task.failed) return 'Failed';
    if (task.newTask) return 'Pending';
    return 'Unknown';
  };

  return (
    <div
      id="AllTasks"
      className="bg-[#1c1c1c] text-white flex flex-col gap-3 mt-6 h-[60vh] rounded-lg shadow-lg p-4 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto"
    >
      <h2 className="text-xl font-semibold mb-2">All Tasks</h2>

      <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
        {allTasks.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks available.</p>
        ) : (
          allTasks.map((task, index) => {
            const status = getStatus(task);
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-lg bg-[#eeeeee] text-black"
              >
                <div className="font-semibold text-lg">{task.title}</div>
                <p className="text-sm sm:text-base flex-1">{task.description}</p>
                <span className="font-medium">{task.category}</span>

                {/* Status Badge */}
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    statusColor[status] || 'bg-gray-400 text-gray-900'
                  }`}
                >
                  {status}
                </span>

                {/* Assigned To */}
                <span className="text-xs text-gray-600 sm:ml-2">
                  👤 {task.assignedTo}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllTasks;
