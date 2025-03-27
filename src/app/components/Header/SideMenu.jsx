import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'


const SideMenu = ({scrollPage, setmenuClicked}) => {

    const closeMenu = () => {

    }
  return (
    <nav className='sidemenu'>
        <button onClick={() => setmenuClicked(prev => !prev)} className='close-btn'>X</button>
        <section className='menu-options'>
            <button>Home</button>
            <button onClick={() => scrollPage()}>Sobre Nós</button>
        </section>

        <section className='social-medias'>
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
        </section>
    </nav>
  )
}

export default SideMenu