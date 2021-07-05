import React from 'react'
import './index.css'
import 'react-dayjs-picker/dist/index.css'
import Header from './components/Header'
import DatePickerDemo from './components/DatePickerDemo'

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <DatePickerDemo />
    </div>
  )
}

export default App
