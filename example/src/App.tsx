import React, { useState } from 'react'

import { Calendar, DatePicker } from 'react-dayjs-picker'
import 'react-dayjs-picker/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false);
  return <div>
    <Calendar />
    <DatePicker isOpen={open} setIsOpen={setOpen} />
  </div>
}

export default App
