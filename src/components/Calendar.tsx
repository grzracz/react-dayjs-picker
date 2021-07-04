import React, { FC, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import DayView from './DayView'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import MonthView from './MonthView'
import YearView from './YearView'
import { ViewType } from './types'
import styles from '../styles.module.css'


interface CalendarProps {
  selected?: Dayjs
  onSelect?: (date: Dayjs) => void
  disableBeforeToday?: boolean
}

const classes = {
  root: 'border border-gray-300 rounded bg-white p-3',
  navbar: 'flex justify-between gap-4 items-center',
  navbarDate: 'flex items-center select-none',
  navbarButtons: 'flex gap-2',
  button: 'p-1',
  carousel: 'w-60'
}

const Calendar: FC<CalendarProps> = ({
  selected,
  onSelect,
  disableBeforeToday
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
    <div className={styles.rdpCalendar}>
      <div className={classes.navbar}>
        <div className={classes.navbarDate}>
          <div
            className='cursor-pointer hover:bg-gray-100 p-1'
            onClick={view === 2 ? setMonthView : undefined}
          >
            {view === 2 && viewedDate.format('MMMM')}
          </div>
          <div
            className='cursor-pointer hover:bg-gray-100'
            onClick={setYearView}
          >
            {view === 0
              ? `${startingYear.toString()} - ${(startingYear + 11).toString()}`
              : viewedDate.format('YYYY')}
          </div>
        </div>
        <div className={classes.navbarButtons}>
          <button
            onClick={view === 0 ? decreaseDecade : decreaseMonth}
            disabled={view === 1}
          >
            {'<'}
          </button>
          <button color='secondary' onClick={resetDate}>
            ↻
          </button>
          <button
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
        transitionTime={250}
        className={classes.carousel}
      >
        <YearView
          disableBeforeToday={disableBeforeToday}
          startingYear={startingYear}
          selected={selected}
          viewedDate={viewedDate}
          setViewedDate={setViewedDate}
          setView={setView}
        />
        <MonthView
          disableBeforeToday={disableBeforeToday}
          selected={selected}
          viewedDate={viewedDate}
          setViewedDate={setViewedDate}
          setView={setView}
        />
        <DayView
          disableBeforeToday={disableBeforeToday}
          selected={selected}
          viewedDate={viewedDate}
          onSelect={onSelect}
        />
      </Carousel>
    </div>
  )
}

export default Calendar
