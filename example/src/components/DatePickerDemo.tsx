import React, { useState } from 'react'
import { DatePicker } from 'react-dayjs-picker'
import { Dayjs } from 'dayjs'
import { LeftOutlined, ReloadOutlined, RightOutlined } from '@ant-design/icons'

const DatePickerDemo = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Dayjs>()

  const [stayOpen, setStayOpen] = useState(true)
  const [markToday, setMarkToday] = useState(false)
  const [disableBeforeToday, setDisableBeforeToday] = useState(false)
  const [disableCustomDates, setDisableCustomDates] = useState(false)
  const [closeOnSelect, setCloseOnSelect] = useState(false)
  const [customFormat, setCustomFormat] = useState(false)
  const [customPosition, setCustomPosition] = useState(false)
  const [customComponents, setCustomComponents] = useState(false)

  const renderButton =
    (children: React.ReactNode) => (onClick: () => void, disabled: boolean) =>
      (
        <button
          onClick={onClick}
          disabled={disabled}
          className='border flex justify-center items-center p-1 shadow hover:bg-gray-100'
        >
          {children}
        </button>
      )

  return (
    <div className='flex flex-col w-full sm:flex-row justify-center items-center sm:items-start px-4 py-8 gap-8'>
      <div className='pb-60 sm:pb-0'>
        <DatePicker
          date={date}
          placeholder={'Select date...'}
          onSelect={setDate}
          isOpen={stayOpen || open}
          setIsOpen={setOpen}
          popoverPositions={customPosition ? ['left'] : ['bottom']}
          closeOnSelect={closeOnSelect}
          disableBeforeToday={disableBeforeToday}
          markToday={markToday}
          format={customFormat ? 'D MMMM YYYY' : undefined}
          disableDates={
            disableCustomDates
              ? (day: Dayjs) => {
                  return day.day() === 0
                }
              : undefined
          }
          render={
            customComponents
              ? {
                  prevButton: renderButton(<LeftOutlined />),
                  refreshButton: renderButton(<ReloadOutlined />),
                  nextButton: renderButton(<RightOutlined />)
                }
              : undefined
          }
        />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-md font-bold'>Options:</div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={stayOpen}
            onClick={() => setStayOpen(!stayOpen)}
          />{' '}
          stay open
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={markToday}
            onClick={() => setMarkToday(!markToday)}
          />{' '}
          mark today
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={disableBeforeToday}
            onClick={() => setDisableBeforeToday(!disableBeforeToday)}
          />{' '}
          disable dates before today
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={disableCustomDates}
            onClick={() => setDisableCustomDates(!disableCustomDates)}
          />{' '}
          disable custom dates
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={closeOnSelect}
            onClick={() => setCloseOnSelect(!closeOnSelect)}
          />{' '}
          close on select
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={customFormat}
            onClick={() => setCustomFormat(!customFormat)}
          />{' '}
          custom date format
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={customPosition}
            onClick={() => setCustomPosition(!customPosition)}
          />{' '}
          custom position
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={customComponents}
            onClick={() => setCustomComponents(!customComponents)}
          />{' '}
          render custom components
        </div>
        <div>...and more</div>
      </div>
    </div>
  )
}

export default DatePickerDemo
