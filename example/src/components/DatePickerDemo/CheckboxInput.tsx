import React, { FC } from 'react'

interface CheckboxInputProps {
  checked?: boolean
  updateChecked?: (checked: boolean) => void
}

const CheckboxInput: FC<CheckboxInputProps> = ({
  checked,
  updateChecked,
  children
}) => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(event) =>
          updateChecked ? updateChecked(event.target.checked) : {}
        }
      />{' '}
      {children}
    </div>
  )
}

export default CheckboxInput
