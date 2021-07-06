import React from 'react'

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
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>date</div>
                <code>Dayjs</code>
              </div>
              <div className='text-sm'>Selected date in Dayjs format</div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>onSelect</div>
                <code>{`(date: Dayjs) => void`}</code>
              </div>
              <div className='text-sm'>
                Function callback executed when a date is selected
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>disableBeforeToday</div>
                <code>boolean</code>
              </div>
              <div className='text-sm'>
                Whether to prevent user from selecting days before today (True)
                or not (False)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>markToday</div>
                <code>boolean</code>
              </div>
              <div className='text-sm'>
                Whether to highlight today (True) or not (False)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>disableDates</div>
                <code>{`(day: Dayjs) => boolean`}</code>
              </div>
              <div className='text-sm'>
                Function that dictates which days are disabled (return True)
                from selection
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>transitionTime</div>
                <code>{`number`}</code>
              </div>
              <div className='text-sm'>
                Number of milliseconds the animation takes to switch a view
                (default: 150ms)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>render</div>
                <code>object</code>
              </div>
              <div className='text-sm'>
                Object with functions to replace particular Calendar components.
                <br />
                Available object attributes:
                <div className='py-2 px-4 border'>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>prevButton</div>
                      <code className='text-right'>{`(onClick: () => void, disabled: boolean) => React.ReactNode`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>refreshButton</div>
                      <code className='text-right'>{`(onClick: () => void, disabled: boolean) => React.ReactNode`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>nextButton</div>
                      <code className='text-right'>{`(onClick: () => void, disabled: boolean) => React.ReactNode`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>weekdayLabel</div>
                      <code className='text-right'>{`(day: typeof WEEKDAYS[number]) => React.ReactNode`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>dayItem</div>
                      <code className='text-right'>{`(value: number, onClick: () => void, active: boolean, highlighted: boolean, disabled: boolean) => React.ReactNode`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>monthItem</div>
                      <code className='text-right'>{`(value: number, onClick: () => void, active: boolean, highlighted: boolean, disabled: boolean) => React.ReactNode`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex flex-col justify-between'>
                      <div className='font-bold'>yearItem</div>
                      <code className='text-right'>{`(value: number, onClick: () => void, active: boolean, highlighted: boolean, disabled: boolean) => React.ReactNode`}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>colors</div>
                <code>object</code>
              </div>
              <div className='text-sm'>
                Object with color strings to replace default Calendar colors.
                <br />
                Available object attributes:
                <div className='py-2 px-4 border'>
                  <div className='py-2'>
                    <div className='flex justify-between'>
                      <div className='font-bold'>active</div>
                      <code className='text-right'>{`string`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex justify-between'>
                      <div className='font-bold'>highlighted</div>
                      <code className='text-right'>{`string`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex justify-between'>
                      <div className='font-bold'>disabled</div>
                      <code className='text-right'>{`string`}</code>
                    </div>
                  </div>
                  <div className='py-2'>
                    <div className='flex justify-between'>
                      <div className='font-bold'>default</div>
                      <code className='text-right'>{`string`}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-2 border shadow'>
            <div className='text-xl font-bold'>DatePicker props</div>
            <div className='text-sm text-gray-600 pb-4'>
              DatePicker extends Calendar - all Calendar props apply to
              DatePicker as well
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>isOpen</div>
                <code>boolean</code>
              </div>
              <div className='text-sm'>
                Whether Calendar is visible (True) or not (False)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>setIsOpen</div>
                <code>{`(isOpen: boolean) => void`}</code>
              </div>
              <div className='text-sm'>
                Function executed when changes in visibility occur (on select or
                on click outside)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>value</div>
                <code>string</code>
              </div>
              <div className='text-sm'>
                Value inside DatePicker input (has priority over date)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>onChange</div>
                <code>{`(event: ChangeEvent<HTMLInputElement>) => void`}</code>
              </div>
              <div className='text-sm'>
                Function executed when input value changes
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>closeOnSelect</div>
                <code>boolean</code>
              </div>
              <div className='text-sm'>
                Whether to close popover on date select (True) or not (False)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>placeholder</div>
                <code>string</code>
              </div>
              <div className='text-sm'>Input placeholder</div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>zIndex</div>
                <code>number</code>
              </div>
              <div className='text-sm'>
                Z-index given to the popover (prevents issues with other high
                z-index components)
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>format</div>
                <code>string</code>
              </div>
              <div className='text-sm'>Custom Dayjs date render format</div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>popoverPositions</div>
                <code>{`('left' | 'right' | 'top' | 'bottom')[]`}</code>
              </div>
              <div className='text-sm'>
                Popover positions from most to least desirable
              </div>
            </div>
            <div className='py-2'>
              <div className='flex justify-between'>
                <div className='font-bold'>renderInput</div>
                <code>{`() => React.ReactNode`}</code>
              </div>
              <div className='text-sm'>Function to replace input component</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation
