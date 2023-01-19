import { setForm, setProducts, setStyles } from '@/redux/data';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal'

function Processing4() {

  const [show, setShow] = useState(false);
  const [error, setError] = useState({});

  const { form1 } = useSelector((state) => state.data)

  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleModalClick = () => {
    setShow(true)
    setError({ email: "", phone: "" })
  }


  return (
    <div className='mb-[60px]'>
      <div>
        <div>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB PROCESSING DATA</h1>
          <div className='flex justify-between'>
            <div className='flex mr-[50px]'>
              <div className='flex items-end w-[519px] justify-between'>
                <div className='flex flex-col'>
                  <p className='text-[#008bbf] font-medium'>Size <span className='text-black text-[12px] font-light'> (Inches/mm)</span></p>
                  <input name="height" onChange={handleChange} value={formData.height}  className='bg-[#ECF8FD] p-2 w-[219.13px] outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Height' />
                </div>
                <p className='font-bold pt-1 mb-4'>x</p>
                <input className='bg-[#ECF8FD] p-2 outline-none w-[219.13px] border-none hover:#008bbf rounded-[10px] h-[55px]' name="width" onChange={handleChange} value={formData.width} type="text" placeholder='Width' />
              </div>
            </div>

            <div className='w-[381px]'>
              <p className='text-[#008bbf] font-medium'> Material</p>
              <div>
                <select name='print_material' onChange={handleChange} value={formData.print_material} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]'>
                  <option hidden>None</option>
                  <option>PE Clear</option>
                  <option>PP Clear</option>
                  <option>Chrome Silver</option>
                  <option>White</option>
                </select>
              </div>

            </div>
          </div>

        </div>


        <div className='flex justify-between mt-[30px]'>
          <div className='mr-[50px]'>
            <div className='w-[519px]'>
              <p className='text-[#008bbf] font-medium'>Embellishment</p>
              <div>
                <select name='embellishment' onChange={handleChange} value={formData.embellishment} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' >
                  <option hidden>None</option>
                  <option>Spot Foil</option>
                  <option>Spot Matte</option>
                  <option>Laminate</option>
                  <option>Tactile Feel</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div className='flex justify-between'>
          <div className='pt-5 w-[519px] mr-[50px]'>
            <p className='text-[#008bbf] font-medium'>Total Number of Design</p>
            <div className='w-[519px]'>
              <input name="total_design" onChange={handleChange} placeholder='Enter total number of design' type='number' value={formData.total_design} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf px-3 rounded-[10px] h-[55px]'>

              </input>
              {/* {formData.total_design === "Custom" && <div>
                                    <input name="total_design" onChange={handleChange} value={formData.total_qty} className='w-full text-[#008bbf] bg-[#ECF8FD] h-[55px] rounded-[10px] px-3' type="text" placeholder='Enter...' />
                                </div>} */}
            </div>
          </div>

          <div className=' pt-5 w-[381px]'>
            <p className='text-[#008bbf] font-medium'>Total Quantity</p>
            <div>
              <input name="total_qty" onChange={handleChange} value={formData.total_qty} className='w-full text-[#008bbf] bg-[#ECF8FD] h-[55px] rounded-[10px] px-3' type="text" placeholder='Enter...' />
            </div>
          </div>
        </div>
        <div className='mt-[-38px]'>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>ANY SPECIAL REQUIREMENT</h1>
          <div>
            <textarea placeholder='Type.......' name="special_requirement" onChange={handleChange} value={formData.special_requirement} className='h-[300px] w-full px-3 py-[20px] border-4 border-[#ECF8FD] rounded-[10px]' cols="30" rows="10"></textarea>
          </div>
        </div>

        <div className='flex absolute left-[50%] setDatas mt-[60px] gap-[35px]'>
          <div className='cursor-pointer w-[200px] text-[#008BBF] font-medium bg-[#ECF8FD] flex items-center justify-center h-[55px] rounded-[10px]' onClick={handleSelect} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Select Again</div>
          <button className='w-[200px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={handleModalClick}>SUBMIT</button>
        </div>
        <Modal show={show} setShow={setShow} error={error} setError={setError} handleModalClick={handleModalClick} />
      </div>

    </div>




  )
}

export default Processing4