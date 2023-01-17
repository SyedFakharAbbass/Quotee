import { submitRequest } from '@/redux/data';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts, setStyles } from '../../redux/data';
import Modal from '../Modal';

const Processing = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({});
    const [showIcons, setShowIcons] = useState(false);
    const [checkedIcons, setCheckedIcons] = useState(false);
    const [checkedIcons2, setCheckedIcons2] = useState(false);

    // dispatch(setProducts(""))
    // dispatch(setStyles(""))
    // dispatch(submitRequest({}))

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        //   dispatch(submitRequest({}))
        // dispatch(setProducts(""))
        // dispatch(setStyles(""))
    }
    const handleCheck = () => {
        setCheckedIcons(true)
        setCheckedIcons2(false)
    }

    const handleCheck2 = () => {
        setCheckedIcons(false)
        setCheckedIcons2(true)
    }
    const handleIcons = () => [
        setShowIcons(!showIcons),
        setCheckedIcons(false),
        setCheckedIcons2(false)
    ]

    return (
        <div className='mb-[60px]'>
            <form className='container' onSubmit={handleSubmit}>
                <div>
                    <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB PROCESSING DATA</h1>
                    <div className='flex justify-between'>
                        <div className='flex mr-[50px]'>
                            <div className='flex items-end w-[519px] justify-between'>
                                <div className='flex flex-col'>
                                    <p className='text-[#008bbf]'>Size <span className='text-black'> (Inches/mm)</span></p>
                                    <input className='bg-[#ECF8FD] p-2 w-[219.13px] outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name="height" onChange={handleChange} value={formData.height} type="text" placeholder='Height' />
                                </div>
                                <p className='font-bold pt-1 mb-4'>x</p>
                                <input className='bg-[#ECF8FD] p-2 outline-none w-[219.13px] border-none hover:#008bbf rounded-[10px] h-[55px]' name="width" onChange={handleChange} value={formData.width} type="text" placeholder='Width' />
                            </div>
                        </div>

                        <div className='w-[381px]'>
                            <p className='text-[#008bbf]'>Barrier Material</p>
                            <div>
                                <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='barrier_material' onChange={handleChange} value={formData.barrier_material} id='None'>
                                    <option hidden>None</option>
                                    <option>White</option>
                                    <option>Clear- Only For non- Cannabis</option>
                                    <option>Metalized</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className='flex justify-between mt-[30px]'>
                        <div className='mr-[50px]'>
                            <div className='w-[519px]'>
                                <p className='text-[#008bbf]'>Print material</p>
                                <div>
                                    <select name='print_material' onChange={handleChange} value={formData.print_material} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]'>
                                        <option hidden>None</option>
                                        <option>Soft Touch- Velvet Like Material</option>
                                        <option>Matte</option>
                                        <option>Gloss</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className=' w-[381px]'>
                            <p className='text-[#008bbf]'>Embellishment</p>
                            <div>
                                <select name='embellishment' onChange={handleChange} value={formData.embellishment} className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' >
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
                    <div className='flex justify-between'>
                        <div className=' w-[519px] mr-[50px]'>
                            <div className='bg-[#ECF8FD] w-[519px] rounded-[10px]'>
                                <div className="flex items-center pl-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 pr-[10px]" />
                                    <label for="bordered-checkbox-2" className=" py-4 text-sm font-medium px-4  text-[#008bbf] ">Child Resistant</label>
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 " />
                                    <label for="bordered-checkbox-2" className=" py-4 text-sm font-medium  px-4 text-[#008bbf]">Press to close standard powder proof</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center w-[381px] justify-between'>
                            <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px] w-[160px]'>
                                <input type="checkbox" onClick={handleIcons} className=" h-4 text-blue-600 rounded" />
                                <label for="bordered-checkbox-2" className=" py-4 text-sm font-medium  px-2 text-[#008bbf] ">Hang Hole{showIcons && <div>{!checkedIcons ? <img src="/images/img1.png" alt="" onClick={handleCheck} /> : <img src="/images/img2.png" alt="" onClick={handleCheck} />} {!checkedIcons2 ? <img src="/images/img4.png" alt="" onClick={handleCheck2} /> : <img src="/images/img3.png" alt="" onClick={handleCheck2} />} </div>}</label>
                            </div>
                            <div className='bg-[#ECF8FD] h-[55px] items-center flex justify-center rounded-[10px]  w-[120px]'>
                                <input type="checkbox" className=" h-4 text-blue-600 rounded" />
                                <label for="bordered-checkbox-2" className=" py-4 text-sm font-medium px-2  text-[#008bbf] ">Tear Notch</label>
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
                        <textarea name="special_requirement" onChange={handleChange} value={formData.special_requirement} className='h-[300px] w-full border-4 border-[#ECF8FD] rounded-[10px]' cols="30" rows="10"></textarea>
                    </div>
                </div>

            </form>
            <Modal />
        </div>
    )
}

export default Processing
