import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import ItemButton from './ItemButton'
import { MONTHS } from './consts'
import { ColorComponentsType, NumberItemRender, ViewType } from './types'
import styles from '../styles.module.css'

interface MonthViewProps {
  disableBeforeToday?: boolean
  selected?: Dayjs
  viewedDate: Dayjs
  setViewedDate: (date: Dayjs) => void
  setView: (view: ViewType) => void
  markToday?: boolean
  renderItem?: NumberItemRender
  colors?: ColorComponentsType
}

const MonthView: FC<MonthViewProps> = ({
  viewedDate,
  setViewedDate,
  setView,
  disableBeforeToday,
  markToday,
  renderItem,
  colors,
  selected
}) => {
  const today = dayjs()
  const isCurrentYear = viewedDate.year() === today.year()

  const onSelect = (month: number) => () => {
    setViewedDate(dayjs(viewedDate).month(month))
    setView(2)
  }

  const isActive = (index: number): boolean => {
    return selected?.year() === viewedDate.year() && index === selected?.month()
  }

  const isHighlighted = (index: number): boolean => {
    return !!markToday && isCurrentYear && today.month() === index
  }

  const isDisabled = (index: number): boolean => {
    return (
      !!disableBeforeToday &&
      (viewedDate.year() < today.year() ||
        (isCurrentYear && index < today.month()))
    )
  }

  return (
    <div className={styles['rdp-month-view']}>
      {MONTHS.map((month, index) =>
        renderItem ? (
          renderItem(
            index,
            onSelect(index),
            isActive(index),
            isHighlighted(index),
            isDisabled(index)
          )
        ) : (
          <ItemButton
            key={`month-${index}`}
            onClick={onSelect(index)}
            className='max-height'
            active={isActive(index)}
            highlighted={isHighlighted(index)}
            disabled={isDisabled(index)}
            colors={colors}
          >
            {month}
          </ItemButton>
        )
      )}
    </div>
  )
}

export default MonthView
