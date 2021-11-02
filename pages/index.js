import {
  Box,
} from '@chakra-ui/react'
import React, { useState }from 'react'
import NavBar from './NavBar'
import Home from './home'
import About from './about'
import Showcase from './showcase'

export default function Index() {
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"]

  const [page, setPage] = useState('home');

  const  changeContent = (e) => {
    setPage(e)
  }

  return (
    <Box>
      <header>
        <NavBar changeContent={changeContent}/>  
      </header>

      <body>
      {(() => {
        switch (page) {
          case 'about':
            return <About />
          case 'showcase':
            return <Showcase />
          default:
            return <Home />
        }
      })()}
      </body>
    </Box>
  )
}
