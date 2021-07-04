import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import arraySupport from 'dayjs/plugin/arraySupport'
import ItemButton from './ItemButton'
import { WEEKDAYS } from './consts'
import styles from '../styles.module.css'
dayjs.extend(arraySupport)

interface DayViewProps {
  disableBeforeToday?: boolean
  selected?: Dayjs
  viewedDate: Dayjs
  onSelect?: (date: Dayjs) => void
  markToday?: boolean
}

const DayView: FC<DayViewProps> = ({
  disableBeforeToday,
  selected,
  viewedDate,
  onSelect,
  markToday
}) => {
  const startingDay = (viewedDate.startOf('month').day() + 6) % 7
  const today = dayjs().startOf('day')
  const isSelectedMonth =
    viewedDate.month() === selected?.month() &&
    viewedDate.year() === selected.year()
  const isCurrentMonth =
    viewedDate.month() === today.month() && viewedDate.year() === today.year()

  const generateDays = () => {
    return Array.from(
      new Array(viewedDate.daysInMonth()),
      (_, index) => index + 1
    )
  }

  const onClick = (index: number) => () => {
    if (onSelect) {
      onSelect(
        dayjs(new Date(viewedDate.year(), viewedDate.month(), index + 1))
      )
    }
  }

  return (
    <div className={styles['rdp-day-view']}>
      {WEEKDAYS.map((weekday, index) => (
        <div key={`weekday-${index}`} className={styles['rdp-weekday']}>
          {weekday}
        </div>
      ))}
      {Array(startingDay)
        .fill(0)
        .map((_, index) => (
          <div key={`fill-day-${index}`} />
        ))}
      {generateDays().map((day, index) => (
        <ItemButton
          key={`month-${viewedDate.month()}-day-${day}`}
          onClick={onClick(index)}
          highlighted={markToday && isCurrentMonth && day === today.date()}
          active={isSelectedMonth && day === selected?.date()}
          disabled={
            disableBeforeToday &&
            (viewedDate.year() < today.year() ||
              (viewedDate.year() === today.year() &&
                (viewedDate.month() < today.month() ||
                  (viewedDate.month() === today.month() &&
                    day < today.date()))))
          }
        >
          {day}
        </ItemButton>
      ))}
    </div>
  )
}

export default DayView
