import React from 'react'
import Image from 'next/image'
import clinicImg from '../../../../../public/clinic.png'

const Description = () => {
  return (
    <div className='description'>
      <section>
        <h2>Sobre Nós</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, corporis, cupiditate commodi repudiandae dicta expedita, doloremque rem laborum optio nulla aliquid labore veritatis. Nam, natus nisi ipsa debitis dolore reiciendis.
        </p>
      </section>
      <Image src = {clinicImg} alt='clinic' className='clinic-img'/>
    </div>
  )
}

export default Description