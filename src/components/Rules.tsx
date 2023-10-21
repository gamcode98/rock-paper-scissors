import { useState } from 'react'
import { images, icons } from '../util'

export function Rules () {
  const [showRules, setShowRules] = useState(false)
  const { imageRules } = images
  const { close } = icons

  const toggleRules = () => setShowRules(!showRules)

  return (
    <div>
      <button
        onClick={toggleRules}
        className='uppercase mx-auto block mt-20 text-white border-1 py-2 px-8 rounded-lg tracking-widest'
      >
        Rules
      </button>
      <div
        className={`${showRules ? 'translate-x-0' : '-translate-x-full lg:-translate-y-[300%]'} ease-in duration-300 absolute bg-white h-screen top-0 left-0 right-0 lg:w-fit lg:h-auto lg:top-1/2 lg:-translate-y-1/2 lg:p-6 lg:rounded-md lg:mx-0 lg:-translate-x-1/2 lg:left-1/2`}
      >
        <div className='w-4/5 mx-auto lg:w-fit flex flex-col h-full justify-evenly lg:grid lg:grid-cols-[auto auto] lg:grid-rows-[auto auto]'>
          <h2 className='uppercase text-center lg:text-left text-4xl lg:text-2xl mb-4 font-bold text-dark-text lg:col-span-1 lg:row-span-1'>Rules</h2>
          <img src={imageRules} alt='rules' className='block mx-auto md:w-2/3 lg:col-span-2 lg:row-span-1 lg:order-last lg:w-3/4' />
          <button onClick={toggleRules} className='block mx-auto lg:col-span-1 lg:row-span-1 lg:mx-0 lg:justify-self-end'>
            <img src={close} alt='close' />
          </button>
        </div>
      </div>
    </div>
  )
}
