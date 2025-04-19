import React from 'react'

const FailedTask = ( {element}) => {
    return (
     
        
      <div
      id="task"
      className="mt-6 bg-gradient-to-br from-red-400 to-red-600 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px] xl:w-[520px] rounded-2xl text-white p-6 flex flex-col shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-between items-center">
              <span className="bg-red-800 px-3 py-1 rounded-full text-xs font-medium">
              {element.category}
              </span>
              <span className="text-sm opacity-80">{element.date}</span>
            </div>
    
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl font-semibold mb-4">
                {element.title}
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                {element.description}
              </p>
            </div>
            <div ><h1 className='font-bold text-red-800'>Failed</h1></div>
          </div>
          
  
    );
    };

export default FailedTask