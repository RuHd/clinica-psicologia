import React, { useEffect, useState } from 'react'
import './Heropage.scss'
import Image from 'next/image'
import img1 from '../../../../public/group_therapy.png'
import img2 from '../../../../public/heropageIMG.png'
import img3 from '../../../../public/woman-therapy.png'


const Heropage = () => {
  const [currentImg, setcurrentImg] = useState(1)

  useEffect(() => {

   const interval = setInterval(() => {
          setcurrentImg(prev => prev + 1 > 3 ? 1 : prev + 1)
    }, 20000)
  
    return () => {
      clearInterval(interval)
    }
  })
  
  return (
    <div className='Heropage'>
      <section className='heropage-images'>
          <Image src={img1} style={{opacity: currentImg == 1 ? 1 : 0}} alt='heropageImg' placeholder='blur'/>
          <Image src={img2} style={{ opacity: currentImg == 2 ? 1 : 0}} alt='heropageImg'placeholder='blur'/>
          <Image src={img3} style={{opacity: currentImg == 3 ? 1 : 0}} alt='heropageImg' placeholder='blur' priority/>
      </section>
        <section>
          <h1>Clinica de Psicologia</h1>  
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet accusamus nesciunt voluptate. Minima incidunt vitae explicabo numquam nihil. Dicta maxime tenetur, pariatur commodi ad quidem aliquid omnis delectus rem quibusdam.
          </p>
          <button>Saiba Mais</button>
        </section>
    </div>
  )
}

export default Heropage