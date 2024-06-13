
import React from 'react'
import img from '../../../public/image.png'
import Image from 'next/image'
const SingleImg = ()=> {
  return (
    <div>
 
      <Image src={img} alt='contact'></Image>
    </div>
  )
}

export default SingleImg
