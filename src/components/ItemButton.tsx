import React, { FC } from 'react'
import styles from '../styles.module.css'

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
    let classes = `${styles['rdp-item-button']} `
    if (disabled) {
      classes += styles.disabled
    } else if (active) {
      classes += styles.active
    } else if (highlighted) {
      classes += styles.highlighted
    } else {
      classes += styles.default
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
