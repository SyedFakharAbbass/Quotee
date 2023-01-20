import React from 'react'

function Header() {
  return (
    <div>
      <div className='bg-[#ecf8fd] w-[100%] h-[72px] items-center content-center flex'>
        <div className='container'>
          <div className='md:w-[200px] w-[150px]'>
            <a href="https://print247.us/" id="linkk" className='md:w-[200px] w-[150px] '><img className='md:w-[200px] w-[120px] md:pl-10' src="/images/print247.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div className='container'>
        <h1 className='text-[#008bbf] font-medium pt-[40px] sm:text-[30px] text-[20px] md:text-[40px]'>GET CUSTOM QUOTE</h1>
        {/* <p className='text-[#008bbf] pl-[50px] '>Fast, Free and Reliable</p> */}
        <p className='sm:w-[76%] text-[#008BBF] md:text-[16px] text-[14px] pt-4 md:pt-7'>As we are Print247, we are available 24/7 to assist and guide you. You just have to inform us about the packaging and we will create an instant quote for you. All you have to answer few questions related to size, material, features and numbers. For as many different setups as you might require, create as many quotes as you like. Quotes for printed roll stock or custom-sized bags can be requested and will be made within 2-3 business days.</p>
      </div>
      <hr className='mt-[44px] borr' />
    </div>
  )
}

export default Header