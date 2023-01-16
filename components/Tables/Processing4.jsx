import React from 'react'

function Processing4() {
  return (
    <div>
      <div className='container'>
        <div>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>JOB processing DATA</h1>
          <div className='flex'>
            <div className='flex  '>
              <div className='flex items-end mr-6 w-[534px]'>
                <div className='flex flex-col'>
                  <p className='text-[#008bbf]'>Size <span className='text-black'> (Inches/mm)</span></p>
                  <input className='bg-[#ECF8FD] w-[219.13px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Height' />
                </div>
                <p className='font-bold pt-1 mb-4 px-2'>x</p>
                <input className='bg-[#ECF8FD] w-[219.13px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' type="text" placeholder='Width' />
              </div>
            </div>

            <div className='ml-[-14px]'>
              <p className='text-[#008bbf]'>Material</p>
              <div>
                <select className='bg-[#ECF8FD] w-[381px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                  <option hidden>None</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

            </div>
          </div>

          <div className='flex'>
            <div>
              <p className='text-[#008bbf]'>Embellishment</p>
              <div>
                <select className='bg-[#ECF8FD] w-[519px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                  <option hidden>None</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            {/* <div className=' ml-[25px]'>
                    <p className='text-[#008bbf]'>Embellishment</p>
                    <div>
                        <select className='bg-[#ECF8FD] w-[381px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                            <option hidden>None</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div> */}

          </div>
        </div>

        <div className='mt-[-38px]'>
          {/* <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>Zipper</h1>
            <div className='flex'>
                <div className='bg-[#ECF8FD] w-[519px] mr-8 rounded-[10px] '>
                    <div className="flex items-center pl-4">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 " />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf] mr-4">Child Resistant</label>
                        <input type="checkbox" className="w-4 h-4 text-blue-600 " />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf]">Press to close standard powder proof</label>
                    </div>
                </div>
                <div className='flex items-center ml-[-6px]'>
                    <div className='bg-[#ECF8FD] w-[222px] h-[55px] mr-6 items-center flex justify-center rounded-[10px]'>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf] mr-4 w-[88px] ">Hang Hole</label>
                    </div>
                    <div className='bg-[#ECF8FD] w-[135px] h-[55px] items-center flex justify-center rounded-[10px]'>
                        <input type="checkbox" className=" h-4 text-blue-600 rounded" />
                        <label for="bordered-checkbox-2" className=" py-4 ml-2 text-sm font-medium  text-[#008bbf] mr-4 ">Tear Notch</label>
                    </div>
                </div>
            </div> */}

          <div className='flex'>
            <div className='w-[519px] pt-5'>
              <p className='text-[#008bbf]'>Total Number of Design</p>
              <div>
                <select className='bg-[#ECF8FD] w-[519px] p-2 outline-none border-none hover:#008bbf rounded-[10px] h-[55px]' name='None' id='None'>
                  <option className='text-[#008bbf]' hidden>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div className='ml-[25px] pt-5'>
              <p className='text-[#008bbf]'>Total Quantity</p>
              <div>
                <input className='text-[#008bbf] bg-[#ECF8FD] w-[381px] h-[55px] rounded-[10px] px-3' type="text" placeholder='Enter...' />
              </div>
            </div>
          </div>

        </div>


        <div className='mt-[-38px]'>
          <h1 className='text-[#008bbf] font-bold text-[26px] mt-16 mb-[30px]'>ANY SPECIAL REQUIREMENT</h1>
          <div>
            <textarea className='h-[300px] w-[930px] border-4 border-[#ECF8FD] rounded-[10px]' name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Processing4