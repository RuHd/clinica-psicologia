import React, { useEffect, useRef, useState } from 'react'
import './Header.scss'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import { IoIosMenu } from "react-icons/io";
import SideMenu from './SideMenu';


const Header = () => {

  const [mobile, setmobile] = useState(false)
  const [menuClicked, setmenuClicked] = useState(false)
  
  const scrollPage = () => {
    window.scrollTo(0, window.screen.availHeight * .8)
  }

 useEffect(() => {
   window.addEventListener("resize", ()=>{
    if (window.innerWidth <= 560) {
      setmobile(true)
    } else setmobile(false)
   })
 
   return () => {
     window.removeEventListener("resize", this)
   }
 })
 
  return (
    <header onResize={() => window.innerWidth <= 350 ? setmobile(true) : setmobile(false)}>
        <h1>Psych</h1>
        {!mobile && 
        <>
          <nav className='social-medias'>
              <button>
                <FaFacebook size={30}/>
              </button>
              <button>
                <FaInstagramSquare size={30}/>
              </button>
              <button>
                <FaLinkedin size={30}/>
              </button>
              <button>
                <FaWhatsappSquare size={30}/>
              </button>
          </nav>
          <nav>
              <button>Home</button>
              <button onClick={() => scrollPage()}>Sobre Nós</button>
          </nav>
        </>
        }
        {mobile && 
          <button className='hamburguer-menu' onClick={() => setmenuClicked(prev => !prev)}>
              <IoIosMenu />
          </button>
        }

        {(mobile && menuClicked) && <SideMenu scrollPage = {scrollPage} setmenuClicked = {setmenuClicked}/>}
    </header>
  )
}

export default Header