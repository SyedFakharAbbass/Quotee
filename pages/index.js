import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Products from '@/components/Products'
import Styles from '@/components/Styles'
import Mylar from '@/components/Mylar'
import { Processing, Processing2, Processing3, Processing4, Processing5, Processing6, Processing7, Processing8, Processing9 } from '@/components/Tables'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setForm } from '@/redux/data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [formsInput , setFormsInput] = useState({});
  const { styles, products , form1 } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    if (products === "one"){
      setFormsInput({product: "MyLar Bag"})
      dispatch(setForm({product: "MyLar Bag"}))
    }
    if (products === "two"){
      dispatch(setForm({ product: "Label & Stickers"}))
      setFormsInput({product: "Label & Stickers"})
    }
    if (products === "three"){
      dispatch(setForm({product: "Boxes"}))
      setFormsInput({product: "Boxes"})
    }
  },[products]);

  useEffect(()=>{
    dispatch(setForm({}))
  },[styles])

  
  useEffect(()=>{
    // style1
    if (styles === "style1"){
      dispatch(setForm({...form1 , product_style: "Flat Pouch"}))
      setFormsInput({stylesData: "Flat Pouch"})
    }
    if (styles === "style2"){
      dispatch(setForm({...form1 , product_style: "Stand Up Pouch"}))
      setFormsInput({stylesData: "Stand Up Pouch"})
    }
    if (styles === "style3"){
      dispatch(setForm({...form1 , product_style: "Roll Stock"}))
      setFormsInput({stylesData: "Roll Stock"})
    }
    if (styles === "style4"){
      dispatch(setForm({...form1 , product_style: "Cut-to-Size"}))
      setFormsInput({stylesData: "Cut-to-Size"})
    }
    if (styles === "style5"){
      dispatch(setForm({...form1 , product_style: "Roll"}))
      setFormsInput({stylesData: "Roll"})
    }
    if (styles === "style6"){
      dispatch(setForm({...form1 , product_style: "Sheet"}))
      setFormsInput({stylesData: "Sheet"})
    }
    if (styles === "style7"){
      dispatch(setForm({...form1 , product_style: "Tuck Box"}))
      setFormsInput({stylesData: "Tuck Box"})
    }
    if (styles === "style8"){
      dispatch(setForm({...form1 , product_style: "Rigid Box"}))
      setFormsInput({stylesData: "Rigid Box"})
    }
    if (styles === "style9"){
      dispatch(setForm({...form1 , product_style: "Mailer Box"}))
      setFormsInput({stylesData: "Mailer Box"})
    }
  },[styles])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Products />
        <div className='flex justify-between gap-[60px] container pt-16 queries pb-[80px]'>
          <div className='w-full'>
            <Styles />
            {styles === "style1" && <div><Processing /></div>}
            {styles === "style2" && <Processing2 />}
            {styles === "style3" && <Processing3 />}
            {styles === "style4" && <Processing4 />}
            {styles === "style5" && <Processing5 />}
            {styles === "style6" && <Processing6 />}
            {styles === "style7" && <Processing7 />}
            {styles === "style8" && <Processing8 />}
            {styles === "style9" && <Processing9 />}
          </div>
          {products && <Mylar formsInput={formsInput} />}
        </div>
      </main>
    </>
  )
}
