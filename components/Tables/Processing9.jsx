import React, { useState } from 'react'
import Modal from '../Modal'

function Processing9() {

  const [show, setShow] = useState(false);

  const handleSelect = () => {
    dispatch(setProducts("")),
    dispatch(setStyles("")),
    dispatch(setForm({}))
}

  const handleModalClick = () => {
    setShow(true)
}

  return (
    <div>
      <div className='container'>
        <div>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB PROCESSING DATA</h1>
          <div>
            <p className='text-[#008bbf] text-[18px] font-medium'>Email Address</p>
            <div>
              <input className='bg-[#ECF8FD] w-[519px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" />
            </div>
          </div>
          <div className='pt-7'>
            <p className='text-[#008bbf] text-[18px] font-medium'>Mobile Number</p>
            <div>
              <input className='bg-[#ECF8FD] w-[519px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="number" />
            </div>
          </div>

          <p className='text-[15px] pt-1'>Let our experts to discuss about your quote</p>
        </div>

        <div className='flex absolute left-[50%] setDatas mt-[60px] gap-[35px]'>
          <div className='cursor-pointer w-[200px] text-[#008BBF] font-medium bg-[#ECF8FD] flex items-center justify-center h-[55px] rounded-[10px]' onClick={handleSelect} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Select Again</div>
          <button className='w-[200px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)"}} onClick={handleModalClick}>SUBMIT</button>
        </div>

      </div>
      <Modal show={show} setShow={setShow} handleModalClick={handleModalClick}/>
    </div>
  )
}

export default Processing9