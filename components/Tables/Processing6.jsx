import React from 'react'

function Processing6() {
  return (
    <div className='mb-[60px]'>
      <div className='container'>
        <div>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB processing DATA</h1>
          <div className='flex justify-between'>
            <div className='flex mr-[50px]'>
              <div className='flex items-end w-[519px] justify-between'>
                <div className='flex flex-col'>
                  <p className='text-[#008bbf]'>Size <span className='text-black'> (Inches/mm)</span></p>
                  <input className='bg-[#ECF8FD] p-2 w-[219.13px] outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Height' />
                </div>
                <p className='font-bold pt-1 mb-4'>x</p>
                <input className='bg-[#ECF8FD] p-2 outline-none w-[219.13px] border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Width' />
              </div>
            </div>

            <div className='w-[381px]'>
              <p className='text-[#008bbf]'> Material</p>
              <div>
                <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                  <option hidden>None</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

            </div>
          </div>

        </div>


        <div className='flex justify-between mt-[30px]'>
          <div className='mr-[50px]'>
            <div className='w-[519px]'>
              <p className='text-[#008bbf]'>Embellishment</p>
              <div>
                <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                  <option hidden>None</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div className='flex justify-between'>
          <div className='pt-5 w-[519px] mr-[50px]'>
            <p className='text-[#008bbf]'>Total Number of Design</p>
            <div className='w-[519px]'>
              <select className='w-full bg-[#ECF8FD] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                <option className='text-[#008bbf]' hidden>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>

          <div className=' pt-5 w-[381px]'>
            <p className='text-[#008bbf]'>Total Quantity</p>
            <div>
              <input className='w-full text-[#008bbf] bg-[#ECF8FD] h-[55px] rounded-[10px] px-3' type="text" placeholder='Enter...' />
            </div>
          </div>
        </div>

      </div>


      <div className='mt-[-38px]'>
        <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>ANY SPECIAL REQUIREMENT</h1>
        <div>
          <textarea className='h-[300px] w-full border-4 border-[#ECF8FD] rounded-[10px]' name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>

    </div>
  )
}

export default Processing6