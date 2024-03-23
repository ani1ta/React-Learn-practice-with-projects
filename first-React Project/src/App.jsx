// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/


export default function App() {
    
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                // item={item}
                {...item}
            />

        )
    })

    return(
        <div >
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )

}