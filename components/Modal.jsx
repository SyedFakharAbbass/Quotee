import { setForm, submitRequest } from '@/redux/data';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Modal({ show, setShow, handleModalClick, setError, error }) {

    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const { products, styles, form1 } = useSelector((state) => state.data)
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
            const abcdd = { dimension: `${form1.height} x ${form1.width} x ${form1.length}`, email: form1.email, product: form1.product, product_style: form1.product_style, phone: form1.phone, barrier_material: form1.barrier_material, print_material: form1.print_material, embellishment: form1.embellishment, total_design: form1.total_design, special_requirement: form1.special_requirement, total_qty: form1.total_qty ,extra: {
                hanghole: form1.hanghole,
                tear: form1.tear,
                zipper: form1.zipper,
                direction: form1.direction,
                finishing: form1.finishing,
                paper_thickness: form1.paper_thickness,
                spot_foiling: form1.spot_foiling
            }}
            dispatch(submitRequest({ ...abcdd })).then((res) => {
                setShow(false);
            })
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
            {show && <div><div className="bg-opacity-50 flex h-[100vh] fixed justify-center items-center top-0 right-0 bottom-0 left-0" onClick={() => setShow(false)} style={{ background: "rgba(12, 11, 11, 0.8)" }}>
            </div>
                <div className="bg-white min-w-[650px] max-w-[100%] pt-[30px] pb-[25px] px-[60px] rounded-[10px] text-center fixed main_class">
                    <h1 className="mb-[30px] font-bold text-[26px] text-[#008BBF]">You Are Just One Step Ahead..!</h1>
                    <div className='flex flex-col mb-[15px]'>
                        <label className='mr-auto text-[#008BBF] font-medium'>Email Address</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange} className='px-[12px] h-[60px] rounded-[10px] border-[1px] border-[#008BBF]' />
                        {error.email && <p className='text-left text-[red] text-[13px] m-[0px]'>{error.email}</p>}
                    </div>
                    <div className='flex flex-col mb-[15px]'>
                        <label className='mr-auto text-[#008BBF] font-medium'>Phone Number</label>
                        <input type="number" name="phone" value={data.phone} onChange={handleChange} className='px-[12px] h-[60px] rounded-[10px] border-[1px] border-[#008BBF]' />
                        {error.phone && <p className='text-left text-[red] text-[13px] m-[0px]'>{error.phone}</p>}
                    </div>
                    <div className='flex justify-center mt-[35px] mb-[12px]'>
                        <button onClick={mainSubmit} className='w-[200px] text-[#FFFFFF] font-medium bg-[#008BBF] flex items-center justify-center h-[55px] rounded-[10px]' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>SUBMIT</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Modal