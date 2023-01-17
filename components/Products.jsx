import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setStyles } from '../redux/data';

const Products = () => {

    const { products } = useSelector((state) => state.data)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("products", products)
    }, [products])

    const handleClick = () => {
        dispatch(setProducts("one"))
        dispatch(setStyles(""))
    }

    const handleClick2 = () => {
        dispatch(setProducts("two"))
        dispatch(setStyles(""))
    }

    const handleClick3 = () => {
        dispatch(setProducts("three"))
        dispatch(setStyles(""))
    }

    return (
        <div className='container '>
            <div className='mx-[80pxpx]'>
                <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Choose Your Product</h1>
                <div className='flex flex-wrap mx-[30px]'>
                    <div className={`w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px] cursor-pointer rounded-[10px] ${products === "one" ? "selected" : ""}`} onClick={handleClick}>
                        <img className='w-[200px]  m-auto' src="/images/lerbag.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" checked={products === "one" ? true : false} className="w-4 h-4 cursor-pointer text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-1 text-sm font-medium text-[20px] cursor-pointer text-[#008bbf] changed">MyLar Bag/Pouch</label>
                            </div>
                            <p className='text-[10px] items-center text-[#008bbf] pb-4 text_data'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className={`w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px] cursor-pointer rounded-[10px] ${products === "two" ? "selected" : ""}`} onClick={handleClick2} >
                        <img className='w-[200px]  m-auto' src="/images/sticker.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4 ">
                                <input type="checkbox" checked={products === "two" ? true : false} className="w-4 h-4 cursor-pointer text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium text-[22px]  cursor-pointer text-[#008bbf] changed"> Label & Stickers</label>
                            </div>
                            <p className='text-[10px] items-center text-[#008bbf] pb-4  text_data'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className={`w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px] cursor-pointer rounded-[10px] ${products === "three" ? "selected" : ""}`} onClick={handleClick3} >
                        <img className='w-[200px]  m-auto' src="/images/boxes.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4 ">
                                <input type="checkbox" checked={products === "three" ? true : false} className="w-4 h-4 cursor-pointer text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium text-[22px] cursor-pointer text-[#008bbf] changed">Boxes</label>
                            </div>
                            <p className='text-[10px] items-center text-[#008bbf] pb-4 text_data'>Custom plane or printed myler bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className='h-[300px] w-[250px] bg-[#ECF8FD] px-[25px] cursor-pointer rounded-[10px]'>
                        <p className='text-center text-[#008bbf] text-[22px] pb-6 pt-3 font-medium'>Not Clear yet..?</p>
                        <p className='text-center text-[#008bbf] text-[15px] pb-8 font-medium'>let our team to help you</p>
                        <p className='text-center text-[#008bbf] text-[15px] pb-10 font-medium'>chat with our team to find best quote for your product</p>
                        <div>
                            <button className='flex m-auto content-center w-[140px] bg-[ #008BBF] bg-[#008BBF] text-white items-center p-3 rounded-[10px]'><img className='pr-2' src="/images/vector.png" />CHAT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
