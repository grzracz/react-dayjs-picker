import React, { FC } from 'react'

interface ItemButtonProps {
  onClick?: () => void
  className?: string
  highlighted?: boolean
  active?: boolean
  disabled?: boolean
}

const ItemButton: FC<ItemButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  active,
  highlighted
}) => {
  const getClass = (additionalClassnames?: string) => {
    let classes = 'item-button'
    if (disabled) {
      classes += ' disabled'
    } else if (active) {
      classes += ' active'
    } else if (highlighted) {
      classes += ' highlighted'
    } else {
      classes += ' default'
    }
    if (additionalClassnames) {
      classes += ` ${additionalClassnames}`
    }
    return classes
  }

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={getClass(className)}
    >
      {children}
    </div>
  )
}

export default ItemButton
