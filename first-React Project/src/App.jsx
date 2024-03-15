// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card"


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
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <Card 
                img={katieZaferes}
                rating="5.0"
                reviewCount={6}
                country="India"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}

