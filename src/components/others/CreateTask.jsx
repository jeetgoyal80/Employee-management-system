import React, { useState } from 'react';
import { getLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const data = getLocalStorage().employees;
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Assign, setAssign] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");








  const submithandler = (e) => {
    e.preventDefault();
  
    console.log(Title, Date, Assign, Category, Description);
  
    const newTask = {
      title: Title,
      date: Date,
      category: Category,
      description: Description,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };
  
    // Clone the data to avoid directly mutating state
    const updatedData = data.map((emp) => {
      if (emp.firstName === Assign) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          newTaskCount: emp.newTaskCount + 1
        };
      }
      return emp;
    });
  
    // Save full updated array to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedData));
  
    // Clear form
    setTitle('');
    setAssign('');
    setCategory('');
    setDescription('');
    setDate('');
  };
  
  return (

    <div className='bg-[#1c1c1c] rounded-xl shadow-lg text-white mt-10 w-full max-w-2xl mx-auto'>
      <form
        className='flex flex-col gap-5 p-8'
        onSubmit={submithandler}
      >
        <h1 className='text-2xl font-semibold text-center text-white mb-4'>Create New Task</h1>

        <div>
          <label className='block text-sm mb-1'>Task Title</label>
          <input
            type="text"
            required
            className='w-full bg-transparent border border-amber-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400'
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className='block text-sm mb-1'>Date</label>
          <input
            type="date"
            required
            className='w-full bg-transparent border border-amber-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400'
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className='block text-sm mb-1'>Assign to</label>
          <select
            required
            className='w-full bg-[#1c1c1c] text-white border border-amber-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400'
            value={Assign}
            onChange={(e) => setAssign(e.target.value)}
          >
            <option value="" disabled>Select Employee</option>
            {data.map((emp, index) => (
              <option key={index} value={emp.firstName}>
                {emp.firstName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm mb-1'>Category</label>
          <input
            type="text"
            required
            placeholder='dev, design...'
            className='w-full bg-transparent border border-amber-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400'
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label className='block text-sm mb-1'>Description</label>
          <textarea
            required
            className='w-full h-24 bg-transparent border border-amber-200 rounded px-3 py-2 resize-none focus:outline-none focus:border-yellow-400'
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold transition-all'
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
