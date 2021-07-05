import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { ColorComponentsType, NumberItemRender, ViewType } from './types'
import ItemButton from './ItemButton'
import styles from '../styles.module.css'

interface YearViewProps {
  startingYear: number
  selected?: Dayjs
  viewedDate: Dayjs
  setViewedDate: (date: Dayjs) => void
  setView: (view: ViewType) => void
  disableBeforeToday?: boolean
  markToday?: boolean
  renderItem?: NumberItemRender
  colors?: ColorComponentsType
}

const YearView: FC<YearViewProps> = ({
  startingYear,
  viewedDate,
  setViewedDate,
  setView,
  selected,
  disableBeforeToday,
  markToday,
  renderItem,
  colors
}) => {
  const today = dayjs()
  const years = Array.from(new Array(12), (_, i) => i + startingYear)

  const onSelect = (year: number) => () => {
    setViewedDate(dayjs(viewedDate).year(year))
    setView(1)
  }

  const isActive = (year: number): boolean => {
    return selected?.year() === year
  }

  const isHighlighted = (year: number): boolean => {
    return !!markToday && year === today.year()
  }

  const isDisabled = (year: number): boolean => {
    return !!disableBeforeToday && year < today.year()
  }

  return (
    <div className={styles['rdp-year-view']}>
      {years.map((year) =>
        renderItem ? (
          renderItem(
            year,
            onSelect(year),
            isActive(year),
            isHighlighted(year),
            isDisabled(year)
          )
        ) : (
          <ItemButton
            key={`year-${year}`}
            onClick={onSelect(year)}
            className='max-height'
            active={isActive(year)}
            highlighted={isHighlighted(year)}
            disabled={isDisabled(year)}
            colors={colors}
          >
            {year}
          </ItemButton>
        )
      )}
    </div>
  )
}

export default YearView
