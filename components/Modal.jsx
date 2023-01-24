import { setForm, submitRequest } from '@/redux/data';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import RequestMessage from './Request';

function Modal({ show, setShow, handleModalClick, setError, error }) {

    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const { products, styles, form1 } = useSelector((state) => state.data)
    const { loading } = useSelector((state) => state.global)

    const mainSubmit = (e) => {
        let error = {};
        if (!data.email) {
            error.email = "Email is required"
        }
        if (!data.phone) {
            error.phone = "Phone Number is required"
        }
        if (Object.keys(error).length > 0) {
            setError(error)
        } else {
            // const abcd = 
            if (styles === "style2" || styles === "style7") {
                const dim = `${form1.height} x ${form1.width}  x ${form1.length}`
                const abcdd = {
                    dimension: dim, email: form1.email, product: form1.product, product_style: form1.product_style, phone: form1.phone, barrier_material: form1.barrier_material, print_material: form1.print_material, embellishment: form1.embellishment, total_design: form1.total_design, special_requirement: form1.special_requirement, total_qty: form1.total_qty, extra: {
                        hanghole: form1.hanghole,
                        tear: form1.tear,
                        zipper: form1.zipper,
                        direction: form1.direction,
                        finishing: form1.finishing,
                        paper_thickness: form1.paper_thickness,
                        spot_foiling: form1.spot_foiling
                    }
                }
                dispatch(submitRequest({ ...abcdd })).then((res) => {
                    setShow(false);
                    document.getElementById("linkk").click();
                    setError({ email: "", phone: "" })
                })
            } else {
                const dim = `${form1.height} x ${form1.width}`
                const abcdd = {
                    dimension: dim, email: form1.email, product: form1.product, product_style: form1.product_style, phone: form1.phone, barrier_material: form1.barrier_material, print_material: form1.print_material, embellishment: form1.embellishment, total_design: form1.total_design, special_requirement: form1.special_requirement, total_qty: form1.total_qty, extra: {
                        hanghole: form1.hanghole,
                        tear: form1.tear,
                        zipper: form1.zipper,
                        direction: form1.direction,
                        finishing: form1.finishing,
                        paper_thickness: form1.paper_thickness,
                        spot_foiling: form1.spot_foiling
                    }
                }
                dispatch(submitRequest({ ...abcdd })).then((res) => {
                    setShow(false);
                    document.getElementById("linkk").click();
                    setError({ email: "", phone: "" })
                })
            }
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        dispatch(setForm({ ...form1, ...data, [e.target.name]: e.target.value }))
    }
    useEffect(() => {
        return () => {
            setError({ email: "", phone: "" })
        }
    }, [])

    return (
        <div className=''>
            {show && <div className=''><div className="z-5 bg-opacity-50 flex h-[100vh] fixed justify-center items-center top-0 right-0 bottom-0 left-0" onClick={() => setShow(false)} style={{ background: "rgba(12, 11, 11, 0.8)" }}>
            </div>
                <div className="bg-white adjust_modal  pt-[30px] mb-[12px] md:pb-[25px] md:px-[60px] px-[10px] rounded-[10px] text-center fixed main_class">
                    <h1 className="md:mb-[30px] mb-4 font-bold md:text-[26px] text-[#008BBF]">You Are Just One Step Ahead..!</h1>
                    <div><img src="/images/close.png" onClick={() => setShow(false)} className='cursor-pointer absolute top-[10px] right-[10px] h-[30px]' /></div>
                    <div className='flex flex-col mb-[15px]'>
                        <label className='mr-auto text-[#008BBF] font-medium'>Email Address</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange} className='md:px-[12px] px-[7px] md:h-[60px] h-[40px] rounded-md md:rounded-[10px] border-[1px] border-[#008BBF]' />
                        {error.email && <p className='text-left text-[red] text-[13px] m-[0px]'>{error.email}</p>}
                    </div>
                    <div className='flex flex-col mb-[15px]'>
                        <label className='mr-auto text-[#008BBF] font-medium'>Phone Number</label>
                        <input type="text" name="phone" value={data.phone} onChange={handleChange} className='px-[12px] md:h-[60px] h-[40px] rounded-md md:rounded-[10px] border-[1px] border-[#008BBF]' />
                        {error.phone && <p className='text-left text-[red] text-[13px] m-[0px]'>{error.phone}</p>}
                    </div>
                    <div className='flex justify-center md:mt-[35px] md:mb-[12px] mt-[12px] mb-[12px]'>
                        {!loading ?
                            <button onClick={mainSubmit} className='md:w-[200px] w-[150px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>SUBMIT</button>
                            :
                            <div className='w-[200px] bg-opacity-[0.7] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                                Loading...{/* <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-500" role="status">
                             </div> */}
                            </div>
                        }
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Modal