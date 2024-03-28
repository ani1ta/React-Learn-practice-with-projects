/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Card'
import data from './Components/data'
import './index.css'

function App() {

  const cards = data.map(item => {
    return (
        <Cards 
            key={item.id}
            // item={item}
            {...item}
        />

    )
})

  return (
    <div>
      <Navbar />
      <section className="cards-list">
                {cards}
      </section>
    </div>
  )
}

export default App
