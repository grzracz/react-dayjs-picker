import React, { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { ViewType } from './types'
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
}

const YearView: FC<YearViewProps> = ({
  startingYear,
  viewedDate,
  setViewedDate,
  setView,
  disableBeforeToday,
  markToday
}) => {
  const today = dayjs()
  const years = Array.from(new Array(12), (_, i) => i + startingYear)

  const onSelect = (year: number) => () => {
    setViewedDate(dayjs(viewedDate).year(year))
    setView(1)
  }

  return (
    <div className={styles['rdp-year-view']}>
      {years.map((year) => (
        <ItemButton
          key={`year-${year}`}
          onClick={onSelect(year)}
          className='max-height'
          highlighted={markToday && year === today.year()}
          disabled={disableBeforeToday && year < today.year()}
        >
          {year}
        </ItemButton>
      ))}
    </div>
  )
}

export default YearView
