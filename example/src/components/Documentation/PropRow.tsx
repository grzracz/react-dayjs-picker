import React, { FC } from 'react'

interface PropRowProps {
  name?: string
  type?: string
  description?: string
  attributes?: {
    name?: string
    type?: string
    description?: string
  }[]
}

const PropRow: FC<PropRowProps> = ({ name, type, description, attributes }) => {
  return (
    <div className='py-2'>
      <div className='flex justify-between'>
        <div className='font-bold'>{name}</div>
        <code className='text-right'>{type}</code>
      </div>
      {description && <div className='text-sm'>{description}</div>}
      {attributes && (
        <>
          <span className='text-sm'>Available object attributes:</span>
          <div className='py-2 px-4 border'>
            {attributes.map((attribute, index) => (
              <PropRow
                key={`${attribute.name}-${index}`}
                name={attribute.name}
                type={attribute.type}
                description={attribute.description}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PropRow
