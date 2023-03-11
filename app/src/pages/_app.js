import '@/styles/globals.css'
import '@/styles/Nav.css'
import '@/styles/Footer.css'
import '@/styles/PostList.css'
import '@/styles/CommentForm.css'
import '@/styles/Comments.css'
import '@/styles/Admin.css'
import '@/styles/AdminLink.css'
import '@/styles/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/slick-theme.css'
import { StatusContext } from '@/context/context'
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'

export default function App({ Component, pageProps }) {
  const [status,setStatus] = useState(false)
  return (
  <StatusContext.Provider value={{status,setStatus}}>
      <header>        
          <Nav/>
        </header>
    <Component {...pageProps} />
    <Footer/>
  </StatusContext.Provider>
  )
}
