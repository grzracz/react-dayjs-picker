import React, { FC } from 'react'

interface ShieldImageProps {
  href?: string
  src?: string
  alt?: string
}

const ShieldImage: FC<ShieldImageProps> = ({ href, src, alt }) => {
  return (
    <a href={href} target='__blank'>
      <img src={src} alt={alt} />
    </a>
  )
}

export default ShieldImage
