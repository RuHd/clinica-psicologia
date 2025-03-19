import React, { Children } from 'react'
import './Content.scss'

const Content = ({children}) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default Content