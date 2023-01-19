import { setForm, setProducts, setStyles, submitRequest } from '@/redux/data';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Processing9() {

  const { form1 } = useSelector((state) => state.data)

  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setForm({ ...formData, [e.target.name]: e.target.value }))
  }
  useEffect(() => {
    setFormData({ ...form1 });
  }, [form1]);

  const handleSelect = () => {
    dispatch(setProducts("")),
      dispatch(setStyles("")),
      dispatch(setForm({}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};
    if (!formData.email) {
      error.email = "Email is required"
    }
    if (!formData.phone) {
      error.phone = "Phone Number is required"
    }
    if (Object.keys(error).length > 0) {
      setError(error)
    } else {
      dispatch(submitRequest({ ...form1 }))
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB PROCESSING DATA</h1>
          <div>
            <p className='text-[#008bbf] text-[18px] font-medium'>Email Address</p>
            <div>
              <input name="email" value={formData.email} onChange={handleChange} className='bg-[#ECF8FD] w-[519px] change_res p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="email" />
            </div>
            {error.email && <p className='text-left text-[red] text-[13px] m-[0px]'>{error.email}</p>}
          </div>
          <div className='pt-7'>
            <p className='text-[#008bbf] text-[18px] font-medium'>Mobile Number</p>
            <div>
              <input name="phone" value={formData.phone} onChange={handleChange} className='bg-[#ECF8FD] w-[519px] change_res p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="number" />
            </div>
            {error.phone && <p className='text-left text-[red] text-[13px] m-[0px]'>{error.phone}</p>}
          </div>

          <p className='text-[15px] pt-1'>Let Our Experts To Discuss About Your Quote</p>
        </div>

        <div className='flex absolute left-[50%] setDatas mt-[60px] gap-[35px] pb-12'>
          <div className='cursor-pointer w-[200px] text-[#008BBF] font-medium bg-[#ECF8FD] flex items-center justify-center h-[55px] rounded-[10px]' onClick={handleSelect} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Select Again</div>
          <button type='submit' className='w-[200px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >SUBMIT</button>
        </div>
        <div className='lg:mb-[0px] mb-[70px]'></div>
      </form>
    </div>
  )
}

export default Processing9