import React from 'react'

const Products = () => {
    return (
        <div className='container '>
            <div className='mx-[80pxpx]'>
                <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Choose Your Product</h1>
                <div className='flex flex-wrap mx-[30px]'>
                    <div className='w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px]  cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[200px]  m-auto' src="/images/lerbag.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-1 text-sm font-medium text-[20px] text-[#008bbf]">MyLar Bag/Pouch</label>
                            </div>
                            <p className='text-[10px] items-center text-[#008bbf] pb-4'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className='w-[250px] h-[300px] bg-[#ECF8FD] mr-[20px] mb-[20px]  cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[200px]  m-auto' src="/images/sticker.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium text-[22px] text-[#008bbf]"> Label & Stickers</label>
                            </div>
                            <p className='text-[10px] items-center text-[#008bbf] pb-4'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className='w-[250px] h-[300px] bg-[#ECF8FD] mr-[20px] mb-[20px]  cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[200px]  m-auto' src="/images/boxes.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium text-[22px] text-[#008bbf]">Boxes</label>
                            </div>
                            <p className='text-[10px] items-center text-[#008bbf] pb-4'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    {/* <div className=''> */}
                        <div className='h-[300px] w-[250px] bg-[#ECF8FD] px-[25px] cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                            <p className='text-center text-[#008bbf] text-[22px] pb-6 pt-3 font-medium'>Not Clear yet..?</p>
                            <p className='text-center text-[#008bbf] text-[15px] pb-8 font-medium'>let our team to help you</p>
                            <p className='text-center text-[#008bbf] text-[15px] pb-10 font-medium'>chat with our team to find best quote for your product</p>
                            <div>
                                <button className='flex m-auto content-center w-[140px] bg-[ #008BBF] bg-[#008BBF] text-white items-center p-3 rounded-[10px]'><img className='pr-2' src="/images/vector.png" />CHAT NOW</button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Products
