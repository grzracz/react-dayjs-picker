import React from 'react'
import PropRow from './PropRow'

const CALENDAR_PROPS = [
  {
    name: 'date',
    type: 'Dayjs',
    description: 'Selected date in Dayjs format'
  },
  {
    name: 'onSelect',
    type: '(date: Dayjs) => void',
    description: 'Function callback executed when a date is selected'
  },
  {
    name: 'disableBeforeToday',
    type: 'boolean',
    description:
      'Whether to prevent user from selecting days before today (True) or not (False)'
  },
  {
    name: 'markToday',
    type: 'boolean',
    description: 'Whether to highlight today (True) or not (False)'
  },
  {
    name: 'disableDates',
    type: '(day: Dayjs) => boolean',
    description:
      'Function that dictates which days are disabled (return True) from selection'
  },
  {
    name: 'transitionTime',
    type: 'number',
    description:
      'Number of milliseconds the animation takes to switch a view (default: 150ms)'
  },
  {
    name: 'style',
    type: 'React.CSSProperties',
    description:
      'React inline styles object passed to top level div of Calendar'
  },
  {
    name: 'className',
    type: 'string',
    description: 'CSS class names passed to top level div of Calendar'
  },
  {
    name: 'render',
    type: 'object',
    description:
      'Object with functions to replace particular Calendar components.',
    attributes: [
      {
        name: 'prevButton',
        type: '(onClick: () => void, disabled: boolean) => React.ReactNode'
      },
      {
        name: 'refreshButton',
        type: '(onClick: () => void, disabled: boolean) => React.ReactNode'
      },
      {
        name: 'nextButton',
        type: '(onClick: () => void, disabled: boolean) => React.ReactNode'
      },
      {
        name: 'weekdayLabel',
        type: '(day: typeof WEEKDAYS[number]) => React.ReactNode'
      },
      {
        name: 'dayItem',
        type: '(value: number, onClick: () => void, active: boolean, highlighted: boolean, disabled: boolean) => React.ReactNode'
      },
      {
        name: 'monthItem',
        type: '(value: number, onClick: () => void, active: boolean, highlighted: boolean, disabled: boolean) => React.ReactNode'
      },
      {
        name: 'yearItem',
        type: '(value: number, onClick: () => void, active: boolean, highlighted: boolean, disabled: boolean) => React.ReactNode'
      }
    ]
  },
  {
    name: 'colors',
    type: 'object',
    description:
      'Object with color strings to replace default Calendar colors.',
    attributes: [
      {
        name: 'active',
        type: 'string'
      },
      {
        name: 'highlighted',
        type: 'string'
      },
      {
        name: 'disabled',
        type: 'string'
      },
      {
        name: 'default',
        type: 'string'
      }
    ]
  }
]

const DATE_PICKER_PROPS = [
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Whether Calendar popover is visible (True) or not (False)'
  },
  {
    name: 'setIsOpen',
    type: '(isOpen: boolean) => void',
    description:
      'Function executed when changes in visibility occur (on select or on click outside)'
  },
  {
    name: 'value',
    type: 'string',
    description: 'Value inside DatePicker input (has priority over date)'
  },
  {
    name: 'onChange',
    type: '(event: ChangeEvent<HTMLInputElement>) => void',
    description: 'Function executed when input value is modified by user'
  },
  {
    name: 'closeOnSelect',
    type: 'boolean',
    description: 'Whether to close popover on date select (True) or not (False)'
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Input placeholder'
  },
  {
    name: 'zIndex',
    type: 'number',
    description:
      'Z-index given to the popover (prevents issues with other high z-index components)'
  },
  {
    name: 'format',
    type: 'string',
    description: 'Custom Day.js date render format'
  },
  {
    name: 'popoverPositions',
    type: "('left' | 'right' | 'top' | 'bottom')[]",
    description: 'Popover positions table sorted from most to least desirable'
  },
  {
    name: 'renderInput',
    type: '() => React.ReactNode',
    description: 'Function to replace input component'
  },
  {
    name: 'inputStyle',
    type: 'React.CSSProperties',
    description: 'React inline styles object passed to input'
  },
  {
    name: 'inputClassName',
    type: 'string',
    description: 'CSS class names passed to input'
  }
]

const Documentation = () => {
  return (
    <>
      <div className='flex justify-center text-3xl gap-2 bg-blue-500 text-white py-3'>
        API Docs
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-full flex flex-col gap-8 max-w-2xl py-4'>
          <div className='p-2 border shadow'>
            <div className='text-xl font-bold'>Calendar props</div>
            <div className='text-sm text-gray-600 pb-4'>
              All props are optional
            </div>
            {CALENDAR_PROPS.map((prop, index) => (
              <PropRow key={`${prop.name}-${index}`} {...prop} />
            ))}
          </div>
          <div className='p-2 border shadow'>
            <div className='text-xl font-bold'>DatePicker props</div>
            <div className='text-sm text-gray-600 pb-4'>
              DatePicker extends Calendar - all Calendar props apply to
              DatePicker as well
            </div>
            {DATE_PICKER_PROPS.map((prop, index) => (
              <PropRow key={`${prop.name}-${index}`} {...prop} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation
