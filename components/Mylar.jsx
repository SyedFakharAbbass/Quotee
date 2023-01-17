import React from 'react'
import { useSelector } from 'react-redux'

const Mylar = () => {

    const { products , styles } = useSelector((state) => state.data)

    return (
        <div className='response'>
            <div className='border-2 border-[#008BBF] w-[510px] m-auto rounded-[10px] h-auto'> 
                <div>
                    <h2 className='text-[#008BBF] font-medium text-[22px] text-center pt-4'>Detail configuration about your selection:</h2>
                </div>
                <div className='flex pt-3'>
                    <div>
                        {products === "one" && <img className='w-[280px] ' src="/images/lerbag.png" alt="" />}
                        {products === "two" && <img className='w-[280px] ' src="/images/sticker.png" alt="" />}
                        {products === "three" && <img className='w-[280px] ' src="/images/boxes.png" alt="" />}
                    </div>
                    <div>
                        {products === "one" && <p className='text-[#008BBF] font-medium pt-24 text-[30px]'>MyLar Bag</p>}
                        {products === "two" && <p className='text-[#008BBF] font-medium pt-24 text-[30px]'>Label & Stickers</p>}
                        {products === "three" && <p className='text-[#008BBF] font-medium pt-24 text-[30px]'>Boxes</p>}
                    </div>
                </div>


                {styles && <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" checked={true} className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium text-[22px] mr-4 text-[#008bbf]">Product Style :</label>
                    </div>
                    <div>
                        <p className='text-[15px]'>Child-Resistant Flat Pouch</p>
                    </div>
                </div>}
                {/* <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium text-[22px] mr-4 text-[#008bbf]">Product Quantity :</label>
                    </div>
                    <div>
                        <p className='text-[15px]'>5,000</p>
                    </div>
                </div>
                <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium text-[22px] mr-4 text-[#008bbf]">Inside Material :</label>
                    </div>
                    <div>
                        <p className='text-[15px]'>Coffee</p>
                    </div>
                </div>
                <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium text-[22px] mr-4 text-[#008bbf]">Bag’s Material :</label>
                    </div>
                    <div>
                        <p className='text-[15px]'>Gloss laminate</p>
                    </div>
                </div>
                <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium text-[22px] mr-4 text-[#008bbf]">Bag’s Dimension :</label>
                    </div>
                    <div>
                        <p className='text-[15px]'>5.75 x 7.5 x 2.5</p>
                    </div>
                </div>
                <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium text-[22px] mr-4 text-[#008bbf]">Artwork Files :</label>
                    </div>
                    <div>
                        <p className='text-[15px]'>3</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Mylar
