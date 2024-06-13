import Cards from '@/app/Cards'
import React from 'react'
import './floatingCards.css'
const FloatingCards =()=> {
  return (
    <div className='flo'>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default FloatingCards
