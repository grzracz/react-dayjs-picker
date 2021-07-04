import React, { ChangeEvent, FC } from 'react'
import { Popover } from 'react-tiny-popover'
import Calendar from './Calendar'
import { Dayjs } from 'dayjs'
import styles from '../styles.module.css'

interface DatePickerProps {
  value?: string
  date?: Dayjs
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  disableBeforeToday?: boolean
  markToday?: boolean
  onSelect?: (day?: Dayjs) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  closeOnSelect?: boolean
  placeholder?: string
  zIndex?: number
  popoverPositions?: ('left' | 'right' | 'top' | 'bottom')[]
}

const DatePicker: FC<DatePickerProps> = ({
  isOpen,
  setIsOpen,
  date,
  onChange,
  onSelect,
  closeOnSelect,
  disableBeforeToday,
  value,
  placeholder,
  zIndex,
  markToday,
  popoverPositions
}) => {
  const onSelectValue = (date: Dayjs) => {
    if (onSelect) {
      onSelect(date)
    }
    if (closeOnSelect && setIsOpen) {
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
      isOpen={!!isOpen}
      padding={4}
      positions={popoverPositions}
      containerStyle={{ zIndex: zIndex?.toString() }}
      content={
        <div className={styles['rdp-date-picker-content']}>
          <Calendar
            disableBeforeToday={disableBeforeToday}
            markToday={markToday}
            selected={date}
            onSelect={onSelectValue}
          />
        </div>
      }
    >
      <input
        name='rdp-date-picker'
        value={date?.format('D MMMM YYYY') || value || ''}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={openPopover}
      />
    </Popover>
  )
}

export default DatePicker
