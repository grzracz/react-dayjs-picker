import React, { FC } from 'react'
import Popover from 'react-tiny-popover'
import Calendar from './Calendar'
import { Dayjs } from 'dayjs'

interface DatePickerProps {
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  date?: Dayjs
  disableBeforeToday?: boolean
  onChange?: (day?: Dayjs) => void
}

const DatePicker: FC<DatePickerProps> = ({
  isOpen,
  setIsOpen,
  date,
  onChange,
  disableBeforeToday
}) => {
  const onSelect = (date: Dayjs) => {
    if (onChange) {
      onChange(date)
    }
    if (setIsOpen) {
      setIsOpen(false)
    }
  }

  const openPopover = () => {
    if (setIsOpen) {
      setIsOpen(true)
    }
  }

  const closePopover = () => {
    if (setIsOpen) {
      setIsOpen(false)
    }
  }

  return (
    <Popover
      onClickOutside={closePopover}
      isOpen={isOpen}
      padding={0}
      positions={['bottom']}
      containerClassName='z-50'
      content={
        <Calendar
          disableBeforeToday={disableBeforeToday}
          selected={date}
          onSelect={onSelect}
        />
      }
    >
      <div onClick={openPopover}>
        <input
          name='rdp-date-picker'
          value={date?.format('D MMMM YYYY') || ''}
          placeholder='Not defined'
          className={date ? 'ring-2 ring-green-500' : ''}
        />
      </div>
    </Popover>
  )
}

export default DatePicker
