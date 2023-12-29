import React from 'react'
import { Footer, Header, Possibility, Blog, WhatGpt3  } from './containers'
import { CTA, Brand, Navbar  } from './components'
import Feature from './components/feature/Feature'
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
