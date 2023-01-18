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
    setFormData({ ...formData, hanghole: "rounded" });
    dispatch(setForm({ ...formData, hanghole: "rounded" }))
  }

  const handleCheck2 = () => {
    setCheckedIcons(false)
    setCheckedIcons2(true)
    setFormData({ ...formData, hanghole: "euro" });
    dispatch(setForm({ ...formData, hanghole: "euro" }))
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
      setFormData({ ...formData, tear: "yes" });
      dispatch(setForm({ ...formData, tear: "yes" }))
    }
  }

  return (
    <div className='mb-[60px]'>
      <div >
        <div>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB PROCESSING DATA</h1>
          <div className='flex justify-between items-end'>
            <div className='flex mr-[50px]'>
              <div className='flex items-end w-[519px] justify-between'>
                <div className='flex flex-col'>
                  <p className='text-[#008bbf]'>Size <span className='text-black'> (Inches/mm)</span></p>
                  <input className='bg-[#ECF8FD] p-2 w-[219.13px] outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Height' />
                </div>
                <p className='font-bold pt-1 mb-4'>x</p>
                <input className='bg-[#ECF8FD] p-2 outline-none w-[219.13px] border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Width' />
              </div>
            </div>

            <div className='flex items-center w-[381px] justify-between'>
              <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px] w-[160px] pl-[8px]'>
                <input type="checkbox" onClick={handleIcons} className=" h-4 text-blue-600 rounded" />
                <label for="bordered-checkbox-2" className="flex labled py-4 text-sm font-medium  px-2 text-[#008bbf] "><span className='text-[14px]'>Hang Hole</span>{showIcons && <div className='flex items-center'>{!checkedIcons ? <img src="/images/img1.png" className='unckecked' alt="" onClick={handleCheck} /> : <img src="/images/img2.png" className='ckecked' alt="" onClick={handleCheck} />} {!checkedIcons2 ? <img src="/images/img4.png" className='unckecked' alt="" onClick={handleCheck2} /> : <img src="/images/img3.png" className='ckecked' alt="" onClick={handleCheck2} />} </div>}</label>
              </div>
              <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px]  w-[120px]'>
                <input type="checkbox" checked={tear} onClick={handleTear} className=" h-4 text-blue-600 rounded" />
                <label for="bordered-checkbox-2" className=" py-4 text-sm font-medium px-2  text-[#008bbf] ">Tear Notch</label>
              </div>
            </div>
          </div>

          <div className='flex justify-between mt-[30px]'>
            <div className='mr-[50px]'>
              <div className='w-[519px]'>
                <p className='text-[#008bbf]'>Barrier material</p>
                <div>
                  <select name='barrier_material' onChange={handleChange} value={formData.barrier_material} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]'>
                    <option hidden>None</option>
                    <option>White</option>
                    <option>Clear- Only For non- Cannabis</option>
                    <option>Metalized</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='w-[381px]'>
              <p className='text-[#008bbf]'>Print Material</p>
              <div>
                <select  name='print_material' onChange={handleChange} value={formData.print_material}  className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' >
                  <option hidden>None</option>
                  <option>Gloss</option>
                  <option>Matte</option>
                  <option>Soft Touch- Velvet Like Material</option>
                </select>
              </div>

            </div>
            {/* <div className=' w-[381px]'>
              <p className='text-[#008bbf]'>Embellishment</p>
              <div>
                <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                  <option hidden>None</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div> */}

          </div>
        </div>

        <div>

          <div className='flex justify-between mt-[30px]'>
            <div className='mr-[50px]'>
              <div className='w-[519px]'>
                <p className='text-[#008bbf]'>Direction</p>
                <div>
                  <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                    <option hidden>None</option>
                    <option>Top</option>
                    <option>Bottom</option>
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='w-[381px]'>
              <p className='text-[#008bbf]'>Embellishment</p>
              <div>
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

          <div className='flex justify-between'>
            <div className='pt-5 w-[519px] mr-[50px]'>
              <p className='text-[#008bbf]'>Total Number of Design</p>
              <div className='w-[519px]'>
                <select name="total_design" onChange={handleChange} value={formData.total_design} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]'>
                  <option className='text-[#008bbf]' hidden>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>

            <div className=' pt-5 w-[381px]'>
              <p className='text-[#008bbf]'>Total Quantity</p>
              <div>
                <input name="total_qty" onChange={handleChange} value={formData.total_qty} className='w-full text-[#008bbf] bg-[#ECF8FD] h-[55px] rounded-[10px] px-3' type="text" placeholder='Enter...' />
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

        <div className='flex absolute left-[50%] setDatas mt-[60px] gap-[35px]'>
          <div className='cursor-pointer w-[200px] text-[#008BBF] font-medium bg-[#ECF8FD] flex items-center justify-center h-[55px] rounded-[10px]' onClick={handleSelect} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Select Again</div>
          <button className='w-[200px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={handleModalClick}>SUBMIT</button>
        </div>
      </div>
      <Modal show={show} setShow={setShow} error={error} setError={setError} handleModalClick={handleModalClick} />
    </div>
  )
}

export default Processing3