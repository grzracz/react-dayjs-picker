import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col gap-2 bg-blue-900 text-white py-6'>
      <div className='flex flex-col sm:flex-row justify-center items-center bg-blue-900 gap-4'>
        <div className='text-4xl'>react-dayjs-picker</div>
        <div>
          by{' '}
          <a
            href='https://github.com/grzracz'
            className='text-blue-300 hover:text-blue-100'
          >
            @grzracz
          </a>
        </div>
      </div>
      <div className='text-sm flex justify-center items-center pt-4 px-4 text-center'>
        Simple date picker and calendar made with React and Day.js
      </div>
    </div>
  )
}

export default Header
