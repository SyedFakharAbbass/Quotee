import React from 'react'

const Products = () => {
    return (
        <div className='container '>
            <div className='mx-[100px]'>
                <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Choose Your Product</h1>
                <div className='flex flex-wrap mx-[30px]'>
                    <div className='w-[250px]  bg-[#008BBF] mr-[20px] mb-[20px]  cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[200px]  m-auto' src="/images/sticker.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-white">MyLar Bag/Pouch</label>
                            </div>
                            <p className='text-[10px] items-center text-white pb-4'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className='w-[250px]  bg-[#008BBF] mr-[20px] mb-[20px]  cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[200px]  m-auto' src="/images/sticker.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-white">MyLar Bag/Pouch</label>
                            </div>
                            <p className='text-[10px] items-center text-white pb-4'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    {/* <div className='w-[250px]  bg-[#008BBF] mr-[20px] mb-[20px]  cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[200px]  m-auto' src="/images/sticker.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-white">MyLar Bag/Pouch</label>
                            </div>
                            <p className='text-[10px] items-center text-white pb-4'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div> */}
                    <div>
                        <div className='w-[250px] bg-[#ECF8FD] px-[25px]'>
                            <p className='text-center text-[#008bbf] text-[22px]'>Not Clear yet..?</p>
                            <p className='text-center text-[#008bbf] text-[15px]'>let our team to help you</p>
                            <p className='text-center text-[#008bbf] text-[15px]'>chat with our team to find best quote for your product</p>
                            <div>
                                <button className='w-[175px] bg-[ #008BBF] bg-[#008BBF] text-white items-center'><img src="/images/vector.png" />CHAT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
