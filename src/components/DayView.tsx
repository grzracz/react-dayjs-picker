import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import arraySupport from 'dayjs/plugin/arraySupport'
import ItemButton from './ItemButton'
import { WEEKDAYS } from './consts'
import styles from '../styles.module.css'
import { ColorComponentsType, NumberItemRender, WeekdayComponentRender } from './types'
dayjs.extend(arraySupport)

interface DayViewProps {
  disableBeforeToday?: boolean
  selected?: Dayjs
  viewedDate: Dayjs
  onSelect?: (date: Dayjs) => void
  markToday?: boolean
  disableDates?: (day: Dayjs) => boolean
  renderItem?: NumberItemRender
  renderWeekday?: WeekdayComponentRender
  colors?: ColorComponentsType
}

const DayView: FC<DayViewProps> = ({
  disableBeforeToday,
  selected,
  viewedDate,
  onSelect,
  markToday,
  disableDates,
  renderItem,
  renderWeekday,
  colors
}) => {
  const startingDay = (viewedDate.startOf('month').day() + 6) % 7
  const today = dayjs().startOf('day')
  const isSelectedMonth =
    viewedDate.month() === selected?.month() &&
    viewedDate.year() === selected.year()
  const isCurrentMonth =
    viewedDate.month() === today.month() && viewedDate.year() === today.year()

  const createDate = (index: number): Dayjs => {
    return dayjs(new Date(viewedDate.year(), viewedDate.month(), index))
  }

  const generateDays = () => {
    return Array.from(
      new Array(viewedDate.daysInMonth()),
      (_, index) => index + 1
    )
  }

  const onClick = (day: number) => () => {
    if (onSelect) {
      onSelect(createDate(day))
    }
  }

  const isActive = (day: number): boolean => {
    return isSelectedMonth && day === selected?.date()
  }

  const isHighlighted = (day: number): boolean => {
    return !!markToday && isCurrentMonth && day === today.date()
  }

  const isDisabled = (day: number): boolean => {
    return (
      (!!disableBeforeToday &&
        (viewedDate.year() < today.year() ||
          (viewedDate.year() === today.year() &&
            (viewedDate.month() < today.month() ||
              (viewedDate.month() === today.month() &&
                day < today.date()))))) ||
      (!!disableDates && disableDates(createDate(day)))
    )
  }

  return (
    <div className={styles['rdp-day-view']}>
      {WEEKDAYS.map((weekday, index) =>
        renderWeekday ? (
          renderWeekday(weekday)
        ) : (
          <div key={`weekday-${index}`} className={styles['rdp-weekday']}>
            {weekday}
          </div>
        )
      )}
      {Array(startingDay)
        .fill(0)
        .map((_, index) => (
          <div key={`fill-day-${index}`} />
        ))}
      {generateDays().map((day) =>
        renderItem ? (
          renderItem(
            day,
            onClick(day),
            isActive(day),
            isHighlighted(day),
            isDisabled(day)
          )
        ) : (
          <ItemButton
            key={`month-${viewedDate.month()}-day-${day}`}
            onClick={onClick(day)}
            highlighted={isHighlighted(day)}
            active={isActive(day)}
            disabled={isDisabled(day)}
            colors={colors}
          >
            {day}
          </ItemButton>
        )
      )}
    </div>
  )
}

export default DayView
