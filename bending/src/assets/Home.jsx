import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const loss = parseFloat(formData.get("loss")?.trim());
    const length = parseFloat(formData.get("length")?.trim());
    const fiber = "Single Mode"; // Only single mode allowed

    if ((isNaN(loss) && loss !== 0) || isNaN(length)) {
      alert("⚠️ All fields are required and must be valid numbers!");
      return;
    }

    let result = null;
if (length >= 0 && length <= 3) {
  if (loss === 0) {
    result = (Math.random() * 5).toFixed(2); // 0.00–5.00
  } else if (loss > 0 && loss <= 0.050) {
    result = (Math.random() * 5 + 5).toFixed(2); // 5.00–10.00
  } else if (loss > 0.050 && loss <= 0.100) {
    result = (Math.random() * 4 + 11).toFixed(2); // 11.00–15.00
  } else if (loss > 0.100 && loss <= 0.150) {
    result = (Math.random() * 4 + 16).toFixed(2); // 16.00–20.00
  } else if (loss > 0.150 && loss <= 0.200) {
    result = (Math.random() * 4 + 21).toFixed(2); // 21.00–25.00
  } else if (loss > 0.200 && loss <= 0.400) {
    result = (Math.random() * 4 + 26).toFixed(2); // 26.00–30.00
  } else if (loss > 0.400 && loss <= 0.600) {
    result = (Math.random() * 4 + 31).toFixed(2); // 31.00–35.00
  } else if (loss > 0.600 && loss <= 0.800) {
    result = (Math.random() * 4 + 36).toFixed(2); // 36.00–40.00
  } else if (loss > 0.800 && loss <= 1.000) {
    result = (Math.random() * 4 + 41).toFixed(2); // 41.00–45.00
  } else {
    alert("⚠️ Please enter a loss value between 0 and 1");
    return;
  }

  navigate('/result', {
    state: {
      result,
      loss,
      length,
      fiber
    }
  });
} else {
  alert("⚠️ Please enter a fiber length between 0 and 3 Km.");
  return;
}

   

    navigate('/result', {
      state: {
        result,
        loss,
        length,
        fiber
      }
    });
  };

  return (
    <div className='w-[100dvw] h-[100vh] bg-[url(./public/fiber-wire.jpg)] bg-cover object-cover flex justify-center items-center '>
      <div className='w-[60%] h-[70%] backdrop-blur-xs rounded-lg flex flex-col justify-center items-center gap-8'>
        <h1 className='text-4xl text-slate-300 text-center font-extrabold mb-5 '>
          Fiber Bending Angle Measurement Using Fiber Loss
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col items-center  gap-4'>
          <label className='text-white text-xl flex items-center justify-evenly'>
            Enter Fiber Loss
            <input
              type="text"
              name="loss"
              placeholder='Enter in dB'
              className='outline-none border-b-2 border-white px-3 py-2 mb-2'
              required
            />
          </label>

          <label className='text-white text-xl flex items-center justify-between'>
            Enter Fiber Length
            <input
              type="text"
              name="length"
              placeholder='Enter in Km'
              className='border-b-2 border-white px-3 py-2 mb-2 outline-none bg-transparent text-slate-300'
              required
            />
          </label>

          {/* Single Mode only */}
          <label className='text-white text-xl flex items-center justify-between'>
            Fiber Mode
            <input
              type="text"
              name="fiber"
              value="Single Mode"
              readOnly
              className=' border-b-2 border-white px-3 py-2 outline-none bg-transparent  text-slate-300'
            />
          </label>

          <button
            type='submit'
            className='px-4 py-2 mt-4 bg-slate-400 font-bold rounded-xl hover:bg-slate-700 hover:text-white'
          >
            Trace Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
