import React from 'react'
import './Heropage.scss'
import Image from 'next/image'
import symbol from '../../../../public/symbol.png' 

const Heropage = () => {
  return (
    <div className='Heropage'>
        <section>
            <Image
              src={symbol}
              width={250}
            />
        </section>
        <h1>Clinica de Psicologia</h1>
    </div>
  )
}

export default Heropage