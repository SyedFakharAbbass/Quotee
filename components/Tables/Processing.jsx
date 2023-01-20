import { setForm, submitRequest } from '@/redux/data';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setStyles } from '../../redux/data';
import Modal from '../Modal';

const Processing = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState({});
    const { form1 } = useSelector((state) => state.data)
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({});
    const [showIcons, setShowIcons] = useState(false);
    const [checkedIcons, setCheckedIcons] = useState(false);
    const [checkedIcons2, setCheckedIcons2] = useState(false);
    const [tear, setTear] = useState(false);
    const [zipper, setZipper] = useState(null);

    const handleChange = (e) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        if (formData?.height?.length === undefined || formData?.height?.length < 10 || formData?.width?.length === undefined || formData?.width?.length < 10) {
            dispatch(setForm({ ...formData, [e.target.name]: e.target.value }))
        }
        // console.log(formData?.height?.length)
        // console.log(form1.height && form1.height.length)
    }
    useEffect(() => {
        setFormData({ ...form1 });
    }, [form1]);

    const handleModalClick = () => {
        setShow(true)
        setError({ email: "", phone: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            // dispatch(setForm({ ...formData, hanghole: "" }))
            setCheckedIcons(false),
            setCheckedIcons2(false)
    }

    const handleZipper = () => {
        if (zipper === 1) {
            setZipper(null)
            setFormData({ ...formData, zipper: null });
            dispatch(setForm({ ...formData, zipper: null }))
        } else {
            setZipper(1)
            setFormData({ ...formData, zipper: "Child Resistant" });
            dispatch(setForm({ ...formData, zipper: "Child Resistant" }))
        }
    }
    const handleZipper2 = () => {
        if (zipper === 2) {
            setZipper(null)
            setFormData({ ...formData, zipper: null });
            dispatch(setForm({ ...formData, zipper: null }))
        } else {
            setZipper(2)
            setFormData({ ...formData, zipper: "Press to close standard powder proof" });
            dispatch(setForm({ ...formData, zipper: "Press to close standard powder proof" }))
        }
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
    const handleSelect = () => {
        dispatch(setProducts("")),
            dispatch(setStyles("")),
            dispatch(setForm({}))
    }

    return (
        <div className='mb-[60px] w-fit'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className='text-[#008bbf] font-bold text-[18px] md:text-[26px] mt-16 mb-[30px] md:mb-[0px]'>JOB PROCESSING DATA</h1>
                    <div className='flex justify-between new_class'>
                        <div className='flex lg:mr-[50px] mr-[0px]'>
                            <div className='flex gap-3 items-end md:w-[519px] justify-between '>
                                <div className=''>
                                    <p className='text-[#008bbf] font-medium'>Size <span className='text-black text-[12px] font-light'> (Inches)</span></p>
                                    <input className='bg-[#ECF8FD] p-2 md:w-[219.13px] w-full  outline-none border-none  rounded-[10px]  h-[55px]' name="height" onChange={handleChange} value={formData.height} type="number" placeholder='Height' />
                                </div>
                                <p className='font-medium md:pt-1 mb-2 md:mb-4 text-[22px]'>x</p>
                                <div>

                                <input className='bg-[#ECF8FD] p-2 outline-none md:w-[219.13px] w-full border-none  rounded-[10px] h-[55px]' name="width" onChange={handleChange} value={formData.width} type="number" placeholder='Width' />
                                </div>
                            </div>
                        </div>

                        <div className='md:w-[381px] pt-[30px]'>
                            <p className='text-[#008bbf] font-medium'>Barrier Material</p>
                            <div className='w-full'>
                                <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none  rounded-[10px] h-[55px]' name='barrier_material' onChange={handleChange} value={formData.barrier_material} id='None'>
                                    <option hidden>None</option>
                                    <option>White</option>
                                    <option>Clear- Only For non- Cannabis</option>
                                    <option>Metalized</option>
                                </select>
                            </div>
                    </div>

                        </div>

                    <div className='flex justify-between  new_class'>
                        <div className='flex lg:mr-[50px] mt-[30px] mr-[0px]'>
                            <div className='md:w-[519px]  w-full'>
                                <p className='text-[#008bbf] font-medium'>Print material</p>
                                <div className='w-full'>
                                    <select name='print_material' onChange={handleChange} value={formData.print_material} className='w-full bg-[#ECF8FD] p-2 outline-none border-none  rounded-[10px] h-[55px]'>
                                        <option hidden>None</option>
                                        <option>Soft Touch- Velvet Like Material</option>
                                        <option>Matte</option>
                                        <option>Gloss</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className=' md:w-[381px] mt-[30px]'>
                            <p className='text-[#008bbf] font-medium'>Embellishment</p>
                            <div className='w-full'>
                                <select name='embellishment' onChange={handleChange} value={formData.embellishment} className='w-full bg-[#ECF8FD] p-2 outline-none border-none  rounded-[10px] h-[55px]' >
                                    <option hidden>None</option>
                                    <option>Spot Varnish</option>
                                    <option>Spot Matte</option>
                                    <option>Spot Foil</option>
                                    <option>Tactile Feel</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='mt-[-38px]'>
                    <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Zipper</h1>
                    <div className='flex mt-[30px]  new_class'>
                        <div className=' md:w-[519px] w-full md:mr-[50px] '>
                            <div className='bg-[#ECF8FD] md:w-[519px] rounded-[10px] hov-inp'>
                                <div className="flex items-center pl-4">
                                    <input type="checkbox" checked={zipper === 1 ? true : false} onClick={handleZipper} className="cursor-pointer w-4 h-4 text-blue-600 pr-[10px]" />
                                    <label for="bordered-checkbox-2" className="cursor-pointer py-4 text-sm font-medium px-4  text-[#008bbf] " onClick={handleZipper}>Child Resistant</label>
                                    <input type="checkbox" checked={zipper === 2 ? true : false} onClick={handleZipper2} className="cursor-pointer w-4 h-4 text-blue-600 " />
                                    <label for="bordered-checkbox-2" onClick={handleZipper2} className=" py-4 text-sm font-medium cursor-pointer px-4 text-[#008bbf]">Press to close standard powder proof</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 w-full md:w-[381px]   justify-between mt-[30px] xl:mt-[0px] '>
                            <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px] w-full md:w-[205px] pl-[8px] hov-inp'>
                                <input type="checkbox" checked={showIcons ? true : false} onClick={handleIcons} className="cursor-pointer h-4 text-blue-600 rounded" />
                                <label for="bordered-checkbox-2" className="flex labled py-4 text-sm font-medium cursor-pointer px-2 text-[#008bbf] "><span onClick={handleIcons} className='text-[14px]'>Hang Hole</span>{showIcons && <div className='flex items-center ml-[16px] mt-[10px]'>{!checkedIcons ? <div className='mr-[10px]'><img src="/images/img1.png" className='unckecked' alt="" onClick={handleCheck} /><span className='text-[10px]'>Round</span></div> : <div className='mr-[10px]'><img src="/images/img2.png" className='ckecked' alt="" onClick={handleCheck} /><span className='text-[10px]'>Round</span></div>} {!checkedIcons2 ? <div className=''><img src="/images/img4.png" className='unckecked' alt="" onClick={handleCheck2} /><span className='text-[10px]'>Euro</span></div> : <div className=''><img src="/images/img3.png" className='ckecked' alt="" onClick={handleCheck2} /><span className='text-[10px]'>Euro</span></div>} </div>}</label>
                            </div>
                            <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px] w-full  md:w-[160px] hov-inp'>
                                <input type="checkbox" checked={tear} onClick={handleTear} className="cursor-pointer  h-4 text-blue-600 rounded" />
                                <label for="bordered-checkbox-2" onClick={handleTear} className="cursor-pointer py-4 text-sm font-medium px-2  text-[#008bbf] ">Tear Notch</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between new_class'>
                        <div className='pt-5 md:w-[519px]  md:mr-[50px]'>
                            <p className='text-[#008bbf] font-medium'>Total Number of Design</p>
                            <div className='md:w-[519px]'>
                                <input name="total_design" onChange={handleChange} placeholder='Enter total number of design' type='number' value={formData.total_design} className='w-full bg-[#ECF8FD] p-2 outline-none border-none  px-3 rounded-[10px] h-[55px]'>

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
                        <textarea placeholder='Type.......' name="special_requirement" onChange={handleChange} value={formData.special_requirement} className='h-[300px] change_res w-[519px] lg:w-full px-3 py-[20px] border-4 border-[#ECF8FD] rounded-[10px]' cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className='flex absolute left-[50%] setDatas mt-[60px] gap-[35px]'>
                    <div className='z-[0] cursor-pointer md:w-[200px] w-[120px] text-[#008BBF] font-medium bg-[#ECF8FD] flex items-center justify-center h-[55px] rounded-[10px]' onClick={handleSelect} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Select Again</div>
                    <button className='z-[0] md:w-[200px] w-[120px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={handleModalClick}>SUBMIT</button>
                </div>
            </form>
            {/* <Modal show={show} setShow={setShow} error={error} setError={setError} handleModalClick={handleModalClick} /> */}
        </div>
    )
}

export default Processing