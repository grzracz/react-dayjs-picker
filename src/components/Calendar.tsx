import React, { FC, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import DayView from './DayView'
import { Carousel } from 'react-responsive-carousel'
import MonthView from './MonthView'
import YearView from './YearView'
import { ViewType } from './types'
import styles from '../styles.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface CalendarProps {
  selected?: Dayjs
  onSelect?: (date: Dayjs) => void
  disableBeforeToday?: boolean
  markToday?: boolean
}

const Calendar: FC<CalendarProps> = ({
  selected,
  onSelect,
  disableBeforeToday,
  markToday
}) => {
  const [view, setView] = useState<ViewType>(2)
  const [viewedDate, setViewedDate] = useState(
    selected || dayjs().startOf('month')
  )
  const startingYear = viewedDate.year() - (viewedDate.year() % 10)

  const resetDate = () => {
    setViewedDate(dayjs().startOf('month'))
    setView(2)
  }

  const increaseDecade = () => {
    setViewedDate(dayjs(viewedDate).add(10, 'year'))
  }

  const decreaseDecade = () => {
    setViewedDate(dayjs(viewedDate).subtract(10, 'year'))
  }

  const increaseMonth = () => {
    setViewedDate(dayjs(viewedDate).add(1, 'month'))
  }

  const decreaseMonth = () => {
    setViewedDate(dayjs(viewedDate).subtract(1, 'month'))
  }

  const setMonthView = () => {
    setView(1)
  }

  const setYearView = () => {
    setView(0)
  }

  return (
    <div className={styles['rdp-calendar']}>
      <div className={styles['rdp-navbar']}>
        <div className={styles['rdp-navbar-dates']}>
          {view === 2 && (
            <div
              className={`${styles['rdp-navbar-date']} ${styles.clickable}`}
              onClick={setMonthView}
            >
              {viewedDate.format('MMMM')}
            </div>
          )}
          <div
            className={`${styles['rdp-navbar-date']}${
              view === 0 ? '' : ` ${styles.clickable}`
            }`}
            onClick={setYearView}
          >
            {view === 0
              ? `${startingYear.toString()} - ${(startingYear + 11).toString()}`
              : viewedDate.format('YYYY')}
          </div>
        </div>
        <div className={styles[`rdp-navbar-buttons`]}>
          <button
            className={`${styles[`rdp-navbar-button`]}${
              view === 1 ? ` ${styles.disabled}` : ''
            }`}
            onClick={view === 0 ? decreaseDecade : decreaseMonth}
            disabled={view === 1}
          >
            {'<'}
          </button>
          <button
            className={`${styles[`rdp-navbar-button`]}${
              view === 1 ? ` ${styles.disabled}` : ''
            }`}
            color='secondary'
            onClick={resetDate}
          >
            ↻
          </button>
          <button
            className={`${styles[`rdp-navbar-button`]}${
              view === 1 ? ` ${styles.disabled}` : ''
            }`}
            onClick={view === 0 ? increaseDecade : increaseMonth}
            disabled={view === 1}
          >
            {'>'}
          </button>
        </div>
      </div>
      <Carousel
        selectedItem={view}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={false}
        swipeable={false}
        emulateTouch={false}
        transitionTime={150}
      >
        <YearView
          disableBeforeToday={disableBeforeToday}
          startingYear={startingYear}
          selected={selected}
          viewedDate={viewedDate}
          setViewedDate={setViewedDate}
          setView={setView}
          markToday={markToday}
        />
        <MonthView
          disableBeforeToday={disableBeforeToday}
          selected={selected}
          viewedDate={viewedDate}
          setViewedDate={setViewedDate}
          setView={setView}
          markToday={markToday}
        />
        <DayView
          disableBeforeToday={disableBeforeToday}
          selected={selected}
          viewedDate={viewedDate}
          onSelect={onSelect}
          markToday={markToday}
        />
      </Carousel>
    </div>
  )
}

export default Calendar
