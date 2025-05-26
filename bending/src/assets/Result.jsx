import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();

  // Destructure values from state
  const { result, loss, length, fiber } = state || {};

  return (
    <div className='w-[100dvw] h-[100vh] bg-[url(./public/port.jpg)] bg-cover object-cover flex justify-center items-center '>
      <div className='w-[60%] h-[70%]  backdrop-blur-3xl   flex flex-col justify-center items-center gap-8 rounded-4xl'>
        <h1 className='text-4xl text-slate-300 text-center font-extrabold mb-5'>Measurements</h1>
        
        <form className='flex flex-col items-center gap-4'>
          <label className='text-white text-xl flex items-center justify-between gap-2'>
            Fiber Loss:
            <input
              type="text"
              value={loss ?? ""}
              readOnly
              className='w-40 outline-none border-white border-b-2 px-3 py-2 mb-4 bg-transparent text-white'
            />
            dB
          </label>

          <label className='text-white text-xl flex items-center justify-between gap-2'>
            Fiber Length:
            <input
              type="text"
              value={length ?? ""}
              readOnly
              className='w-40 border-b-2 border-white px-3 py-2 mb-4 outline-none bg-transparent text-white'
            />
            Km
          </label>

          <label className='text-white text-xl flex items-center gap-2'>
            Fiber Mode:
            <input
              type="text"
              value={fiber ?? ""}
              readOnly
              className='w-40 border-b-2 border-white px-3 py-2 mb-4 outline-none bg-transparent text-white'
            />
          </label>

          <label className='text-white text-xl flex items-center gap-2'>
            Bending Angle:
            <input
              type="text"
              value={result ?? ""}
              readOnly
              className='w-40 border-b-2 border-white px-3 py-2 mb-4 outline-none bg-transparent text-white'
            />
            °
          </label>
        </form>
      </div>
    </div>
  );
};

export default Result;
