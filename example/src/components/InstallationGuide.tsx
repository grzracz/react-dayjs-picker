import React from 'react'

const InstallationGuide = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center text-3xl gap-2 bg-blue-500 text-white py-3'>
        Installation Guide
      </div>
      <div className='flex flex-col max-w-2xl items-center justify-center p-4'>
        <div className='p-4'>
          <div className='p-2'>As with any other library, use:</div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>yarn add react-dayjs-picker</code>
          </div>
          <div className='p-2'>
            if you're using <b>Yarn</b>, and
          </div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>npm install react-dayjs-picker</code>
          </div>
          <div className='p-2'>
            if you're using <b>NPM</b>.
          </div>
        </div>
        <div className='p-4'>
          <div className='p-2'>
            After that, you will be able to import components like this:
          </div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>
              {`import { DatePicker, Calendar } from 'react-dayjs-picker'`}
              <br />
              {`import 'react-dayjs-picker/dist/index.css'`}
            </code>
          </div>
          <div className='p-2'>
            The CSS file needs to imported only once at the top of the
            application.
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallationGuide
