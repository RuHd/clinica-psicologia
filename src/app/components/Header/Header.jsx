import React from 'react'
import './Header.scss'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <h1>Psych</h1>
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
            <button>Sobre Nós</button>
        </nav>
    </header>
  )
}

export default Header