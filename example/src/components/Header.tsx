import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col bg-blue-900 text-white py-6'>
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
        Simple date picker and calendar made for React and Day.js
      </div>
      <div className='flex gap-2 justify-center p-2'>
        <a
          href='https://www.npmjs.com/package/react-dayjs-picker'
          target='__blank'
        >
          <img
            src='https://img.shields.io/npm/v/react-dayjs-picker.svg'
            alt='npm package version'
          />
        </a>
        <a
          href='https://github.com/grzracz/react-dayjs-picker'
          target='__blank'
        >
          <img
            src='https://img.shields.io/github/stars/grzracz/react-dayjs-picker?style=social'
            alt='github stars'
          />
        </a>
        <a
          href='https://github.com/grzracz/react-dayjs-picker'
          target='__blank'
        >
          <img
            src='https://img.shields.io/npm/l/react-dayjs-picker'
            alt='MIT license'
          />
        </a>
      </div>
    </div>
  )
}

export default Header
