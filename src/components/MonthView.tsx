import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import ItemButton from './ItemButton'
import { MONTHS } from './consts'
import { ViewType } from './types'

interface MonthViewProps {
  disableBeforeToday?: boolean
  selected?: Dayjs
  viewedDate: Dayjs
  setViewedDate: (date: Dayjs) => void
  setView: (view: ViewType) => void
}

const MonthView: FC<MonthViewProps> = ({
  viewedDate,
  setViewedDate,
  setView,
  disableBeforeToday
}) => {
  const today = dayjs()
  const isCurrentYear = viewedDate.year() === today.year()

  const onSelect = (month: number) => () => {
    setViewedDate(dayjs(viewedDate).month(month))
    setView(2)
  }

  return (
    <div className='rdp-month-view'>
      {MONTHS.map((month, index) => (
        <ItemButton
          key={`month-${index}`}
          onClick={onSelect(index)}
          className='max-height'
          highlighted={isCurrentYear && today.month() === index}
          disabled={
            (disableBeforeToday && viewedDate.year() < today.year()) ||
            (isCurrentYear && index < today.month())
          }
        >
          {month}
        </ItemButton>
      ))}
    </div>
  )
}

export default MonthView
