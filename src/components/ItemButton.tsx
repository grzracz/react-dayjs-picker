import React, { FC } from 'react'
import styles from '../styles.module.css'
import { ColorComponentsType } from './types'

interface ItemButtonProps {
  onClick?: () => void
  highlighted?: boolean
  active?: boolean
  disabled?: boolean
  colors?: ColorComponentsType
  className?: string
}

const ItemButton: FC<ItemButtonProps> = ({
  children,
  disabled,
  onClick,
  active,
  highlighted,
  colors,
  className
}) => {
  const getStyle = () => {
    const style = {
      backgroundColor: 'white',
      color: 'black',
      cursor: 'pointer'
    }
    if (disabled) {
      style.backgroundColor = colors?.disabled ? colors.disabled : 'lightgray'
      style.color = 'gray'
      style.cursor = 'not-allowed'
    } else if (active) {
      style.backgroundColor = colors?.active ? colors.active : 'royalblue'
      style.color = 'white'
    } else if (highlighted) {
      style.backgroundColor = colors?.highlighted
        ? colors.highlighted
        : 'lightgreen'
    }
    return style
  }

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`${styles['rdp-item-button']}${
        className ? ` ${className}` : ''
      }`}
      style={getStyle()}
    >
      {children}
    </div>
  )
}

export default ItemButton
