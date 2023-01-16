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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { styles, products } = useSelector((state) => state.data);

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
        <div className='flex justify-between container pt-16'>
          <div>
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
          {products && <Mylar />}
        </div>
      </main>
    </>
  )
}
