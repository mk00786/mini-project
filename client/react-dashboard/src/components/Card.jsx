import React from 'react'

const Card = ({title,content}) => {
  return (
    <div className='p-4 bg-white rounded-xl shadow hover:shadow-lg transition-transsform transform duration-200 hover:scale-[1.02]'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className='text-gray-600'>{content}</p>
    </div>
  )
}

export default Card
