import React from 'react'

function Processing9() {
  return (
    <div>
    <div className='container'>
      <div>
        <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB PROCESSING DATA</h1>  
          <div>
            <p className='text-[#008bbf]'>Email Address</p>
            <div>
            <input className='bg-[#ECF8FD] w-[519px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text"  />
            </div>
          </div>
          <div>
            <p className='text-[#008bbf]'>Mobile Number</p>
            <div>
            <input className='bg-[#ECF8FD] w-[519px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="number" />
            </div>
          </div>

          <p className='text-[15px]'>Let our experts to discuss about your quote</p>
      </div>

    </div>
  </div>
  )
}

export default Processing9