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
            <div className='container'>

                {products === "one" && <div> <h1 className='text-[#008bbf] font-bold text-[26px] mb-[30px]'>Choose Your PRODUCT’S style</h1><div className='flex flex-wrap mx-[27px]'>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style1" ? "selected" : ""}`} onClick={handleClick1}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox" checked={styles === "style1" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style2" ? "selected" : ""}`} onClick={handleClick2}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style2" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style3" ? "selected" : ""}`} onClick={handleClick3}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style3" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                }
                {products === "two" && <div> <h1 className='text-[#008bbf] font-bold text-[26px] mb-[30px]'>Choose Your PRODUCT’S style</h1><div className='flex flex-wrap mx-[27px]'>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style4" ? "selected" : ""}`} onClick={handleClick4}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style4" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch2</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style5" ? "selected" : ""}`} onClick={handleClick5}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input  checked={styles === "style5" ? true : false} type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style6" ? "selected" : ""}`} onClick={handleClick6}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style6" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                }
                {products === "three" && <div> <h1 className='text-[#008bbf] font-bold text-[26px] mb-[30px]'>Choose Your PRODUCT’S style</h1><div className='flex flex-wrap mx-[27px]'>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style7" ? "selected" : ""}`} onClick={handleClick7}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style7" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style8" ? "selected" : ""}`} onClick={handleClick8}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style8" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch3</label>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px] ${styles === "style9" ? "selected" : ""}`} onClick={handleClick9}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                            <div className="flex items-center pl-4">
                                <input type="checkbox"  checked={styles === "style9" ? true : false} className="w-4 h-4 text-blue-600 rounded " />
                                <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf] changed">Flat Pouch</label>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Styles
