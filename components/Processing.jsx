import React from 'react'

const Processing = () => {
    return (
        <div>
            <div className='container'>
                <div>
                    <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB processing DATA</h1>
                    <div className='flex'>
                        <div className='flex '>
                            <div className='flex items-end mr-6'>
                                <div className='flex flex-col'>
                                    <p className='text-[#008bbf]'>Size <span className='text-black'> (Inches/mm)</span></p>
                                    <input className='bg-[#ECF8FD] w-[139.08px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Height' />
                                </div>
                                <p className='font-bold pt-1'>x</p>
                                <input className='bg-[#ECF8FD] w-[139.08px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Width' />
                                <p className='font-bold pt-1'>x</p>
                                <input className='bg-[#ECF8FD] w-[139.08px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Gusset' />
                            </div>
                        </div>

                        <div>
                            <p className='text-[#008bbf]'>Barrier Material</p>
                            <div>
                                <select className='bg-[#ECF8FD] w-[381px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                                    <option hidden>None</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-[77px]'>
                            <p className='text-[#008bbf]'>Print material</p>
                            <div>
                                <select className='bg-[#ECF8FD] w-[381px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                                    <option hidden>None</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#008bbf]'>Embellishment</p>
                            <div>
                                <select className='bg-[#ECF8FD] w-[381px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                                    <option hidden>None</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Zipper</h1>
                    <div className='flex'>
                        <div className='bg-[#ECF8FD] w-[425px]  mr-8'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf] mr-4">Child Resistant</label>
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf]">Press to close standard powder proof</label>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-[#ECF8FD] w-[139.08px] h-[55px] mr-6 items-center flex justify-center'>
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf] mr-4">Hang Hole</label>
                            </div>
                            <div className='bg-[#ECF8FD] w-[139.08px] h-[55px] items-center flex justify-center '>
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf] mr-4">Tear Notch</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Processing
