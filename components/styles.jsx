import React from 'react'

const Styles = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Choose Your PRODUCT’S style</h1>
                <div className='flex flex-wrap mx-[27px]'>
                    <div className='w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[150px] m-auto' src="/images/flatPouch.png" alt="" />
                        <div className='px-[25px]'>
                        <div className="flex items-center pl-4">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                            <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf]">Flat Pouch</label>
                        </div>
                    </div>
                    </div>
                   
                    <div className='w-[200px] h-[195px] bg-[#008BBF] mr-[20px] mb-[20px] cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[150px] m-auto' src="/images/standUp.png" alt="" />
                        <div className='px-[25px]'>
                        <div className="flex items-center pl-4">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                            <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-white">Stand Up Pouch</label>
                        </div>
                    </div>
                    </div>
            
                    <div className='w-[200px] h-[195px] bg-[#ECF8FD] mr-[20px] mb-[20px] cursor-pointer rounded-[10px]' style={{ boxShadow: "10px 10px 10px #959595" }}>
                        <img className='w-[150px] m-auto' src="/images/roll.png" alt="" />
                        <div className='px-[25px]'>
                        <div className="flex items-center pl-4">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded " />
                            <label for="bordered-checkbox-2" className="w-full py-4 ml-2 text-sm font-medium  text-[#008bbf]">Roll Stock</label>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Styles
