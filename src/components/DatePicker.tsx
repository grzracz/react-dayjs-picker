import React, { ChangeEvent, FC } from 'react'
import { Popover } from 'react-tiny-popover'
import Calendar, { CalendarProps } from './Calendar'
import { Dayjs } from 'dayjs'
import styles from '../styles.module.css'

interface DatePickerProps extends CalendarProps {
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  onSelect?: (day?: Dayjs) => void
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  closeOnSelect?: boolean
  placeholder?: string
  zIndex?: number
  format?: string
  popoverPositions?: ('left' | 'right' | 'top' | 'bottom')[]
  renderInput?: () => React.ReactNode
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const onSelectValue = (date: Dayjs) => {
    if (props.onSelect) {
      props.onSelect(date)
    }
    if (props.closeOnSelect && props.setIsOpen) {
      props.setIsOpen(false)
    }
  }

  const openPopover = () => {
    if (props.setIsOpen) {
      props.setIsOpen(true)
    }
  }

  const closePopover = () => {
    if (props.setIsOpen) {
      props.setIsOpen(false)
    }
  }

  return (
    <Popover
      onClickOutside={closePopover}
      isOpen={!!props.isOpen}
      padding={4}
      positions={props.popoverPositions}
      containerStyle={{ zIndex: props.zIndex?.toString() }}
      content={
        <div className={styles['rdp-date-picker-content']}>
          <Calendar {...(props as CalendarProps)} onSelect={onSelectValue} />
        </div>
      }
    >
      <div>
        {props.renderInput ? (
          props.renderInput()
        ) : (
          <input
            name='rdp-date-picker'
            value={
              props.value ||
              props.date?.format(props.format || 'DD/MM/YYYY') ||
              ''
            }
            placeholder={props.placeholder}
            onChange={props.onChange}
            onFocus={openPopover}
          />
        )}
      </div>
    </Popover>
  )
}

export default DatePicker
