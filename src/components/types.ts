import React from 'react'
import { WEEKDAYS } from './consts'

export type ViewType = 0 | 1 | 2
export type ButtonComponentRender = (
  onClick: () => void,
  disabled: boolean
) => React.ReactNode
export type WeekdayComponentRender = (
  day: typeof WEEKDAYS[number]
) => React.ReactNode
export type NumberItemRender = (
  value: number,
  onClick: () => void,
  active: boolean,
  highlighted: boolean,
  disabled: boolean
) => React.ReactNode

export type RenderComponentsType = {
  prevButton?: ButtonComponentRender
  refreshButton?: ButtonComponentRender
  nextButton?: ButtonComponentRender
  weekdayLabel?: WeekdayComponentRender
  dayItem?: NumberItemRender
  monthItem?: NumberItemRender
  yearItem?: NumberItemRender
}

export type ColorComponentsType = {
  active: string
  highlighted: string
  default: string
  disabled: string
}
