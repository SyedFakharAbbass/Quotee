import React from 'react'
import { useSelector } from 'react-redux'

const Mylar = () => {

    const { products  ,form1 } = useSelector((state) => state.data)

    const main = form1.width || form1.height || form1.length ? true : false

    return (
        <div className='response '>
            <div className='border-2 border-[#008BBF]  m-auto rounded-[10px]  h-auto pb-10 xl:px-4 w-[300px] md:w-[400px] xl:w-[450px] myler'> 
                <div>
                    <h2 className='text-[#008BBF] font-medium sm:text-[20px] text-center pt-4 px-3'>Detail configuration about your selection:</h2>
                </div>
                <div className='flex flex-col xl:flex-row pt-3 pb-5 items-center'>
                    <div className=''>
                        {products === "one" && <img className='xl:w-[280px] w-[200px] h-[200px] xl:h-[280px] main' src="/images/lerbag.png" alt="" />}
                        {products === "two" && <img className='xl:w-[280px]  w-[200px] h-[200px] xl:h-[280px] main' src="/images/sticker.png" alt="" />}
                        {products === "three" && <img className='xl:w-[280px]   w-[200px] h-[200px] xl:h-[280px] main' src="/images/boxes.png" alt="" />}
                    </div>
                    <div>
                        {form1.product && <p className='text-[#008BBF] font-medium mt-6 md:text-[24px] text-[18px]'>{form1.product}</p>}
                    </div>
                </div>


                {form1.product_style && <div className='flex pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Product Style :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.product_style}</p>
                    </div>
                </div>}
                {main && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Dimensions :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{`${form1?.height === undefined || form1?.height === "" ? "" : form1.height} ${form1?.width === undefined || form1?.width === "" ? "" : "x" +  " " + form1.width} ${form1?.length === undefined ? "" : "x" + " " + form1.length}`}</p>
                    </div>
                </div>}
                {form1.barrier_material && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Barrier Material :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.barrier_material}</p>
                    </div>
                </div>}
                {form1.print_material && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Print Material :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.print_material}</p>
                    </div>
                </div>}
                {form1.paper_thickness && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Paper Thickness :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.paper_thickness}</p>
                    </div>
                </div>}
                {form1.finishing && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Finishing :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.finishing}</p>
                    </div>
                </div>}
                {form1.spot_foiling && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Spot Foiling :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.spot_foiling}</p>
                    </div>
                </div>}
                {form1.embellishment && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Embellishment :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.embellishment}</p>
                    </div>
                </div>}
                {form1.direction && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Direction :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.direction}</p>
                    </div>
                </div>}
                {form1.zipper && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Zipper :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.zipper}</p>
                    </div>
                </div>}
                {form1.hanghole && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Hang Hole :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.hanghole}</p>
                    </div>
                </div>}
                {form1.tear && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Tear :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.tear}</p>
                    </div>
                </div>}
                {form1.total_design && <div className='flex  pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Total Design :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.total_design}</p>
                    </div>
                </div>}
                {form1.total_qty && <div className='flex pl-5 xl:pl-7'>
                    <div className='items-center flex'>
                        <input type="checkbox" checked={true} className=" h-4 new_check text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-[12px] font-medium md:text-[18px] mr-2 md:mr-3 text-[#008bbf]">Total Quantity :</label>
                    </div>
                    <div className='items-center flex'>
                        <p className='md:text-[14px] text-[10px]'>{form1.total_qty}</p>
                    </div>
                </div>}

                {/* total_qty */}

                {/* total_design */}
                {/* hanghole */}

                {/* zipper */}

                {/* embellishment */}
                {/* <div className='flex pt-8 pl-10'>
                    <div>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded cursor-pointer" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium md:text-[22px] mr-4 text-[#008bbf]">Product Quantity :</label>
                    </div>
                    <div>
                        <p className='md:text-[14px] text-[10px]'>5,000</p>
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
