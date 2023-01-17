import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Products from '@/components/Products'
import Styles from '@/components/Styles'
import Mylar from '@/components/Mylar'
import { Processing, Processing2, Processing3, Processing4, Processing5, Processing6, Processing7, Processing8, Processing9 } from '@/components/Tables'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [formsInput , setFormsInput] = useState({});
  const { styles, products } = useSelector((state) => state.data);

  useEffect(()=>{
    if (products === "one"){
      setFormsInput({product: "MyLar Bag"})
    }
    if (products === "two"){
      setFormsInput({product: "Label & Stickers"})
    }
    if (products === "three"){
      setFormsInput({product: "Boxes"})
    }
  },[products])

  
  useEffect(()=>{
    // style1
    if (styles === "style1"){
      setFormsInput({stylesData: "Flat Pouch"})
    }
    if (styles === "style2"){
      setFormsInput({stylesData: "Stand Up Pouch"})
    }
    if (styles === "style3"){
      setFormsInput({stylesData: "Roll Stock"})
    }
    if (styles === "style4"){
      setFormsInput({stylesData: "Cut-to-Size"})
    }
    if (styles === "style5"){
      setFormsInput({stylesData: "Roll"})
    }
    if (styles === "style6"){
      setFormsInput({stylesData: "Sheet"})
    }
    if (styles === "style7"){
      setFormsInput({stylesData: "Tuck Box"})
    }
    if (styles === "style8"){
      setFormsInput({stylesData: "Rigid Box"})
    }
    if (styles === "style9"){
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
