import React from 'react';
import Newtask from '../TaskList/Newtask';
import AcceptTask from '../TaskList/AcceptTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';

const Tasklist = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-2">
      {data.tasks.map((element, index) => (
        <div key={index} className="min-w-[300px] max-w-sm sm:w-full flex gap-5 flex-wrap">
          {element.newTask && <Newtask element={element} />}
          {element.active && <AcceptTask element={element} />}
          {element.completed && <CompleteTask element={element} />}
          {element.failed && <FailedTask element={element} />}
        </div>
      ))}
    </div>
  );
};

export default Tasklist;
