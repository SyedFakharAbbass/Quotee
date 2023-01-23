import { setForm, setProducts, setStyles } from '@/redux/data';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal'

function Processing3() {

  const [show, setShow] = useState(false);
  const [error, setError] = useState({});

  const { form1 } = useSelector((state) => state.data)

  const [showIcons, setShowIcons] = useState(false);
  const [checkedIcons, setCheckedIcons] = useState(false);
  const [checkedIcons2, setCheckedIcons2] = useState(false);
  const [tear, setTear] = useState(false);
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

  const handleCheck = () => {
    setCheckedIcons(true)
    setCheckedIcons2(false)
    setFormData({ ...formData, hanghole: "Rounded" });
    dispatch(setForm({ ...formData, hanghole: "Rounded" }))
  }

  const handleCheck2 = () => {
    setCheckedIcons(false)
    setCheckedIcons2(true)
    setFormData({ ...formData, hanghole: "Euro" });
    dispatch(setForm({ ...formData, hanghole: "Euro" }))
  }

  const handleIcons = () => {
    setShowIcons(!showIcons),
      dispatch(setForm({ ...formData, hanghole: "" }))
    setCheckedIcons(false),
      setCheckedIcons2(false)
  }

  const handleModalClick = () => {
    setShow(true)
    setError({ email: "", phone: "" })
  }

  const handleTear = () => {
    setTear(!tear);
    if (tear) {
      setFormData({ ...formData, tear: "" });
      dispatch(setForm({ ...formData, tear: "" }))
    } else {
      setFormData({ ...formData, tear: "Yes" });
      dispatch(setForm({ ...formData, tear: "Yes" }))
    }
  }

  return (
    <div className='mb-[60px] w-fit'>
      <div >
        <div>
          <h1 className='text-[#008bbf] font-bold text-[18px] md:text-[26px] mt-16 mb-[30px]  md:mb-[0px]'>JOB PROCESSING DATA</h1>
          <div className='flex justify-between flex-col gap-[50px] xl:flex-row pt-[30px]'>
            <div className='flex set_class_data'>
              <div className='flex items-end  md:w-[519px] gap-2  justify-between'>
                <div className=''>
                  <p className='text-[#008bbf] font-medium'>Size <span className='text-black text-[12px] font-light'> (Inches)</span></p>
                  <input className='bg-[#ECF8FD] p-2 md:w-[219.13px] w-full outline-none border-none  rounded-[10px] h-[55px]' name="height" onChange={handleChange} value={formData.height} type="number" placeholder='Height' />
                </div>
                <p className='font-medium pt-1 mb-4 text-[22px]'>x</p>
                <div>

                  <input className='bg-[#ECF8FD] p-2 outline-none w-full md:w-[219.13px] border-none  rounded-[10px] h-[55px]' name="width" onChange={handleChange} value={formData.width} type="number" placeholder='Width' />
                </div>
              </div>
            </div>

            <div className='flex items-center md:w-[381px] gap-4 pt-[30px] justify-between'>
              <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px]  w-full md:w-[205px] pl-[8px] hov-inp'>
                <input type="checkbox" checked={showIcons ? true : false} onClick={handleIcons} className="cursor-pointer h-4 text-blue-600 rounded" />
                <label for="bordered-checkbox-2" className="flex labled py-4 text-sm font-medium cursor-pointer px-2 text-[#008bbf] "><span onClick={handleIcons} className='text-[14px]'>Hang Hole</span>{showIcons && <div className='flex items-center ml-[16px] mt-[10px]'>{!checkedIcons ? <div className='mr-[10px]'><img src="/images/img1.png" className='unckecked' alt="" onClick={handleCheck} /><span className='text-[10px]'>Round</span></div> : <div className='mr-[10px]'><img src="/images/img2.png" className='ckecked' alt="" onClick={handleCheck} /><span className='text-[10px]'>Round</span></div>} {!checkedIcons2 ? <div className=''><img src="/images/img4.png" className='unckecked' alt="" onClick={handleCheck2} /><span className='text-[10px]'>Euro</span></div> : <div className=''><img src="/images/img3.png" className='ckecked' alt="" onClick={handleCheck2} /><span className='text-[10px]'>Euro</span></div>} </div>}</label>
              </div>
              <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px] w-full md:w-[160px] hov-inp'>
                <input type="checkbox" checked={tear} onClick={handleTear} className="cursor-pointer  h-4 text-blue-600 rounded" />
                <label for="bordered-checkbox-2" onClick={handleTear} className="cursor-pointer py-4 text-sm font-medium px-2  text-[#008bbf] ">Tear Notch</label>
              </div>
            </div>
          </div>

          <div className='flex gap-[50px] justify-between new_class mt-[30px]'>
            <div className=''>
              <div className='md:w-[519px] '>
                <p className='text-[#008bbf] font-medium'>Barrier material</p>
                <div className='w-full'>
                  <select name='barrier_material' onChange={handleChange} value={formData.barrier_material} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]'>
                    <option hidden>None</option>
                    <option>White</option>
                    <option>Clear- Only For non- Cannabis</option>
                    <option>Metalized</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='md:w-[381px]  '>
              <p className='text-[#008bbf] font-medium'>Print Material</p>
              <div className='w-full'>
                <select name='print_material' onChange={handleChange} value={formData.print_material} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' >
                  <option hidden>None</option>
                  <option>Gloss</option>
                  <option>Matte</option>
                  <option>Soft Touch- Velvet Like Material</option>
                </select>
              </div>

            </div>


          </div>
        </div>

        <div>

          <div className='flex gap-[50px] justify-between new_class mt-[30px]'>
            <div className=''>
              <div className='md:w-[519px] '>
                <p className='text-[#008bbf] font-medium'>Direction</p>
                <div className='w-full'>
                  <select name='direction' onChange={handleChange} value={formData.direction} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' >
                    <option hidden>None</option>
                    <option>Top</option>
                    <option>Bottom</option>
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='md:w-[381px] '>
              <p className='text-[#008bbf] font-medium'>Embellishment</p>
              <div className='w-full'>
                <select name='embellishment' onChange={handleChange} value={formData.embellishment} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]'>
                  <option hidden>None</option>
                  <option>Spot Varnish</option>
                  <option>Spot Matte</option>
                  <option>Spot Foil</option>
                  <option>Tactile Feel</option>
                </select>
              </div>

            </div>

          </div>

          <div className='flex justify-between new_class gap-[50px]'>
            <div className='pt-5 md:w-[519px] '>
              <p className='text-[#008bbf] font-medium'>Total Number of Design</p>
              <div className='md:w-[519px]'>
                <input name="total_design" onChange={handleChange} placeholder='Enter total number of design' type='number' value={formData.total_design} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf px-3 rounded-[10px] h-[55px]'>

                </input>

              </div>
            </div>

            <div className=' pt-5 md:w-[381px] '>
              <p className='text-[#008bbf] font-medium'>Total Quantity</p>
              <div>
                <input name="total_qty" onChange={handleChange} value={formData.total_qty} className='w-full text-[#008bbf] bg-[#ECF8FD] h-[55px] rounded-[10px] px-3' type="number" placeholder='Enter...' />
              </div>
            </div>
          </div>

        </div>


        <div className='mt-[-38px]'>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>ANY SPECIAL REQUIREMENT</h1>
          <div>
            <textarea placeholder='Type.......' name="special_requirement" onChange={handleChange} value={formData.special_requirement} className='h-[300px] w-full px-3 py-[20px] border-4 border-[#ECF8FD] rounded-[10px]' cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className='new_screen'></div>
        <div className='flex absolute left-[50%] setDatas mt-[60px] gap-[20px] lg:gap-[35px] pb-12 adjust_data'>
          <div className='cursor-pointer w-[200px] text-[#008BBF] font-medium bg-[#ECF8FD] flex items-center justify-center h-[55px] rounded-[10px]' onClick={handleSelect} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Select Again</div>
          <button type='submit' className='w-[200px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]'  onClick={handleModalClick} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>SUBMIT</button>
        </div>
      </div>
      <Modal show={show} setShow={setShow} error={error} setError={setError} handleModalClick={handleModalClick} />
    </div>
  )
}

export default Processing3