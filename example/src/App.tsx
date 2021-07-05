import React from 'react'
import Header from './components/Header'
import DatePickerDemo from './components/DatePickerDemo'
import InstallationGuide from './components/InstallationGuide'
import Documentation from './components/Documentation'

const App = () => {
  return (
    <div className='w-full pb-20'>
      <Header />
      <DatePickerDemo />
      <InstallationGuide />
      <Documentation />
    </div>
  )
}

export default App
