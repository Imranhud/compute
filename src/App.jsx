import React from 'react'
import HeadV from './components/HeadV'
import Hero from './components/Hero'
import Cliets from './components/Cliets'
import Card from './components/Card'
import Footer from './components/Footer copy'

const App = () => {
  return (
      <div className='bg-black w-full overflow-auto'>
      <HeadV />
      <Hero />
      <Cliets />
      <Card />
      <Footer />
    </div>
  )
}

export default App