import { setStyles } from '@/redux/data';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Styles = () => {

    const { products, styles } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const handleClick1 = () => {
        dispatch(setStyles("style1"))
    }

    const handleClick2 = () => {
        dispatch(setStyles("style2"))
    }

    const handleClick3 = () => {
        dispatch(setStyles("style3"))
    }

    const handleClick4 = () => {
        dispatch(setStyles("style4"))
    }

    const handleClick5 = () => {
        dispatch(setStyles("style5"))
    }

    const handleClick6 = () => {
        dispatch(setStyles("style6"))
    }

    const handleClick7 = () => {
        dispatch(setStyles("style7"))
    }

    const handleClick8 = () => {
        dispatch(setStyles("style8"))
    }

    const handleClick9 = () => {
        dispatch(setStyles("style9"))
    }

    return (
        <div>
            {/* <div className='container'> */}

                {products === "one" && <div className="w-fit"> <h1 className='text-[#008bbf] font-bold text-[26px] mb-[30px]'>CHOOSE YOUR PRODUCT’S STYLE</h1><div className='flex mr-[27px] flex-wrap w-max'>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style1" ? "selected" : ""}`} onClick={handleClick1}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox" checked={styles === "style1" ? true : false} className="w-4 h-4 text-blue-600 rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style2" ? "selected" : ""}`} onClick={handleClick2}>
                        <img className='w-[150px] m-auto' src="/images/standUp.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style2" ? true : false} className="w-4 h-4 text-blue-600 rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Stand Up Pouch</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style3" ? "selected" : ""}`} onClick={handleClick3}>
                        <img className='w-[150px] m-auto' src="/images/roll.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style3" ? true : false} className="w-4 h-4 text-blue-600 rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Roll Stock</label>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                }
                {products === "two" && <div className="w-fit"> <h1 className='text-[#008bbf] font-bold text-[26px] mb-[30px]'>CHOOSE YOUR PRODUCT’S STYLE</h1><div className='flex mr-[27px] flex-wrap w-max'>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style4" ? "selected" : ""}`} onClick={handleClick4}>
                        <img className='w-[150px] m-auto' src="/images/cutToSize.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style4" ? true : false} className="w-4 h-4  rounded accent-white tickbox " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Cut-to-Size</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style5" ? "selected" : ""}`} onClick={handleClick5}>
                        <img className='w-[150px] m-auto' src="/images/styleRoll.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input  checked={styles === "style5" ? true : false} type="checkbox" className="w-4 h-4  rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Roll</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style6" ? "selected" : ""}`} onClick={handleClick6}>
                        <img className='w-[150px] m-auto' src="/images/sheet.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style6" ? true : false} className="w-4 h-4 rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Sheet</label>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                }
                {products === "three" && <div className="w-fit"> <h1 className='text-[#008bbf] font-bold text-[26px] mb-[30px]'>CHOOSE YOUR PRODUCT’S STYLE</h1><div className='flex mr-[27px] flex-wrap w-max'>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style7" ? "selected" : ""}`} onClick={handleClick7}>
                        <img className='w-[150px] m-auto' src="/images/tuck.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style7" ? true : false} className="w-4 h-4 text-blue-600 rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Tuck Box</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style8" ? "selected" : ""}`} onClick={handleClick8}>
                        <img className='w-[150px] m-auto' src="/images/rigid.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style8" ? true : false} className="w-4 h-4 text-blue-600 rounded accent-white tickbox " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Rigid Box</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style9" ? "selected" : ""}`} onClick={handleClick9}>
                        <img className='w-[150px] m-auto' src="/images/mailer.png" alt="" />
                        <div className='px-[25px] flex justify-center'>
                            <div className="flex items-center ">
                                <input type="checkbox"  checked={styles === "style9" ? true : false} className="w-4 h-4 text-blue-600 rounded accent-white tickbox  " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Mailer Box</label>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                }
            {/* </div> */}
        </div>
    )
}

export default Styles
