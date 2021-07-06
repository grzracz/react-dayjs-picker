import React, { useState } from 'react'
import { DatePicker } from '../dist'
import { Dayjs } from 'dayjs'
import { LeftOutlined, ReloadOutlined, RightOutlined } from '@ant-design/icons'
import CheckboxInput from './CheckboxInput'

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
    <div className='flex flex-col w-full sm:flex-row justify-center items-center sm:items-start px-4 py-8 gap-20'>
      <div className='pb-56 sm:pb-0'>
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
        <CheckboxInput checked={stayOpen} updateChecked={setStayOpen}>
          stay open
        </CheckboxInput>
        <CheckboxInput checked={markToday} updateChecked={setMarkToday}>
          mark today
        </CheckboxInput>
        <CheckboxInput checked={disableBeforeToday} updateChecked={setDisableBeforeToday}>
          disable dates before today
        </CheckboxInput>
        <CheckboxInput checked={disableCustomDates} updateChecked={setDisableCustomDates}>
          disable custom dates
        </CheckboxInput>
        <CheckboxInput checked={closeOnSelect} updateChecked={setCloseOnSelect}>
          close on select
        </CheckboxInput>
        <CheckboxInput checked={customFormat} updateChecked={setCustomFormat}>
          custom date format
        </CheckboxInput>
        <CheckboxInput checked={customPosition} updateChecked={setCustomPosition}>
          custom position
        </CheckboxInput>
        <CheckboxInput checked={customComponents} updateChecked={setCustomComponents}>
          render custom components
        </CheckboxInput>
        <div>...and more</div>
      </div>
    </div>
  )
}

export default DatePickerDemo
