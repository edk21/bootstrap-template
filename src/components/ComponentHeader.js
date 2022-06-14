import React from 'react'

const ComponentHeader = ({ title, header, text, headerSpan }) => {
  return (
    <div className='section-title'>
        <h2>{title}</h2>
        <h3>{header}<span>{headerSpan}</span></h3>
        <p>{text}</p>
    </div>
  )
}

export default ComponentHeader