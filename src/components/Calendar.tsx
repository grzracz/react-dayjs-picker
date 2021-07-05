import React, { FC, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import DayView from './DayView'
import { Carousel } from 'react-responsive-carousel'
import MonthView from './MonthView'
import YearView from './YearView'
import { ColorComponentsType, RenderComponentsType, ViewType } from './types'
import styles from '../styles.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export interface CalendarProps {
  date?: Dayjs
  onSelect?: (date: Dayjs) => void
  disableBeforeToday?: boolean
  markToday?: boolean
  disableDates?: (day: Dayjs) => boolean
  render?: RenderComponentsType
  colors?: ColorComponentsType
  transitionTime?: number
}

const Calendar: FC<CalendarProps> = ({
  date,
  onSelect,
  disableBeforeToday,
  markToday,
  disableDates,
  render,
  transitionTime,
  colors
}) => {
  const [view, setView] = useState<ViewType>(2)
  const [viewedDate, setViewedDate] = useState(date || dayjs().startOf('month'))
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
          {render?.prevButton ? (
            render.prevButton(
              view === 0 ? decreaseDecade : decreaseMonth,
              view === 1
            )
          ) : (
            <button
              className={`${styles[`rdp-navbar-button`]}${
                view === 1 ? ` ${styles.disabled}` : ''
              }`}
              onClick={view === 0 ? decreaseDecade : decreaseMonth}
              disabled={view === 1}
            >
              {'<'}
            </button>
          )}
          {render?.refreshButton ? (
            render.refreshButton(resetDate, view === 1)
          ) : (
            <button
              className={`${styles[`rdp-navbar-button`]}${
                view === 1 ? ` ${styles.disabled}` : ''
              }`}
              onClick={resetDate}
              disabled={view === 1}
            >
              ↻
            </button>
          )}
          {render?.nextButton ? (
            render.nextButton(
              view === 0 ? increaseDecade : increaseMonth,
              view === 1
            )
          ) : (
            <button
              className={`${styles[`rdp-navbar-button`]}${
                view === 1 ? ` ${styles.disabled}` : ''
              }`}
              onClick={view === 0 ? increaseDecade : increaseMonth}
              disabled={view === 1}
            >
              {'>'}
            </button>
          )}
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
        transitionTime={transitionTime || 150}
      >
        <YearView
          disableBeforeToday={disableBeforeToday}
          startingYear={startingYear}
          selected={date}
          viewedDate={viewedDate}
          setViewedDate={setViewedDate}
          setView={setView}
          markToday={markToday}
          renderItem={render?.yearItem}
          colors={colors}
        />
        <MonthView
          disableBeforeToday={disableBeforeToday}
          selected={date}
          viewedDate={viewedDate}
          setViewedDate={setViewedDate}
          setView={setView}
          markToday={markToday}
          renderItem={render?.monthItem}
          colors={colors}
        />
        <DayView
          disableBeforeToday={disableBeforeToday}
          selected={date}
          viewedDate={viewedDate}
          onSelect={onSelect}
          markToday={markToday}
          disableDates={disableDates}
          renderWeekday={render?.weekdayLabel}
          renderItem={render?.dayItem}
          colors={colors}
        />
      </Carousel>
    </div>
  )
}

export default Calendar
