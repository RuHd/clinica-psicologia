import React from 'react'
import './Footer.scss'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <h2>Mídias Sociais</h2>
        <nav>
            <button>
              <FaFacebook size={40}/>
            </button>
            <button>
              <FaInstagramSquare size={40}/>
            </button>
            <button>
              <FaLinkedin size={40}/>
            </button>
            <button>
              <FaWhatsappSquare size={40}/>
            </button>
        </nav>
        <p>Site feito por Ruan Mesquita - 2025</p>
    </footer>
  )
}

export default Footer