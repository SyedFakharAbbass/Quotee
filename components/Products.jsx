import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForm, setProducts, setStyles } from '../redux/data';
import Modal from './Modal';

const Products = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState({});
    const { products, form1 } = useSelector((state) => state.data);
    const [colors, setColors] = useState(false)

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("products", products)
    // }, [products])

    const handleModalClick = () => {
        setShow(true)
        setError({email: "" ,phone: ""})
    }

    const handleClick = () => {
        dispatch(setProducts("one"))
        dispatch(setStyles(""))
        dispatch(setForm({ ...form1, product: "MyLar Bag" }));
    }

    const handleClick2 = () => {
        dispatch(setProducts("two"))
        dispatch(setStyles(""))
        dispatch(setForm({ ...form1, product: "Label & Stickers" }))
    }

    const handleClick3 = () => {
        dispatch(setProducts("three"))
        dispatch(setStyles(""))
        dispatch(setForm({ ...form1, product: "Boxes" }))
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColors(!colors);
        }, 500);
        return () => clearInterval(intervalId);
    }, [colors]);

    const handleContact = () => {
        setShow(true)
    }
    useEffect(() => {
        // document.getElementById("abcd").click();
        (function (w, d, u) {
            var s = d.createElement('script'); s.async = true; s.src = u + '?' + (Date.now() / 60000 | 0);
            var h = d.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h);
        })(window, document, 'https://cdn.bitrix24.com/b24127555/crm/site_button/loader_1_rzvzu1.js');
    }, [])

    return (
        <div className='container '>
            <div className='mx-[80pxpx]'>
                <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>CHOOSE YOUR PRODUCT</h1>
                <div className='flex flex-wrap mx-[30px]'>
                    <div className={`w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px] cursor-pointer rounded-[10px] ${products === "one" ? "selected" : ""}`} onClick={handleClick}>
                        <img className='w-[200px]  m-auto' src="/images/lerbag.png" alt="" />
                        <div className='mt-2'>
                            <div className="flex items-center justify-center">
                                <div>
                                    <input type="checkbox" checked={products === "one" ? true : false} className="w-4 h-4 cursor-pointer accent-white rounded  tickbox" />
                                </div>
                                <div>
                                    <label for="bordered-checkbox-2" className="w-full py-4 ml-1 text-sm font-medium text-[20px] cursor-pointer text-[#008bbf] changed">Mylar Bag/Pouch</label>
                                </div>
                            </div>
                            <div></div>
                            <p className='text-[10px] text-center items-center text-[#008bbf] py-2 px-[39px] text_data'>Custom plane or printed mylar bags are prefect solution for your product</p>
                        </div>
                    </div>
                    <div className={`w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px] cursor-pointer rounded-[10px] ${products === "two" ? "selected" : ""}`} onClick={handleClick2} >
                        <img className='w-[200px]  m-auto' src="/images/sticker.png" alt="" />
                        <div className='mt-2'>
                            <div className="flex items-center justify-center">
                                <div  className='flex'>
                                    <input type="checkbox" checked={products === "two" ? true : false} className="w-4 h-4 cursor-pointer accent-white text-blue-600 rounded tickbox" />
                                </div>
                                <div>
                                    <label for="bordered-checkbox-2" className="w-full py-4 ml-2 font-medium text-[20px] cursor-pointer text-[#008bbf] changed"> Label & Stickers</label>
                                </div>
                            </div>
                            <div></div>
                            <p className='text-[10px] text-center items-center text-[#008bbf] py-2 px-[39px] text_data'>Highlight your brands logo with our personalized and custom printed labels and stickers.</p>
                        </div>
                    </div>
                    <div className={`w-[250px]  bg-[#ECF8FD] mr-[20px] h-[300px] mb-[20px] cursor-pointer rounded-[10px] ${products === "three" ? "selected" : ""}`} onClick={handleClick3} >
                        <img className='w-[200px]  m-auto' src="/images/boxes.png" alt="" />
                        <div className='mt-2'>
                            <div className="flex items-center justify-center ">
                                <div>
                                    <input type="checkbox" checked={products === "three" ? true : false} className="w-4 h-4 mt-2 cursor-pointer accent-white text-blue-600 rounded tickbox" />
                                </div>
                                <div>
                                    <label for="bordered-checkbox-2" className="w-full py-4 ml-2 font-medium text-[20px] cursor-pointer text-[#008bbf] changed">Boxes</label>
                                </div>
                            </div>
                            <div></div>
                            <p className='text-[10px] text-center items-center text-[#008bbf] py-2 px-[39px] text_data'>Upgrade your brands recoginition with our plane and custom printed boxes.</p>
                        </div>
                    </div>
                    <div className='h-[300px] w-[250px] bg-[#ECF8FD] px-[25px] cursor-pointer rounded-[10px]'>
                        <p className='text-center text-[#008bbf] text-[22px] pb-6 pt-3 font-medium capitalize'>Not Clear yet..?</p>
                        <p className='text-center text-[#008bbf] text-[15px] pb-8 font-medium capitalize'>let our team to help you</p>
                        <p className='text-center text-[#008bbf] text-[15px] pb-10 font-medium capitalize'>chat with our team to find best quote for your product</p>
                        <div>
                            {
                                colors ?
                                    <button id="abcd" onClick={handleContact} className='flex m-auto content-center w-[175px] h-[60px] bg-[#008BBF] justify-center text-white items-center p-3 rounded-[10px]'><img className='pr-2' src="/images/vector.png" /><span className='flex text-[14px]'>CONTACT NOW</span></button>
                                    : <button id="abcd" onClick={handleContact} className='flex m-auto content-center w-[175px] h-[60px] justify-center bg-[#DBF4FF] text-[#008BBF] font-extrabold items-center p-3 rounded-[10px] ' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}><img className='pr-2' src="/images/vector1.png" /><span className='flex text-[14px]'>CONTACT NOW</span></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} error={error} setError={setError} setShow={setShow} handleModalClick={handleModalClick} />
        </div>
    )
}

export default Products
