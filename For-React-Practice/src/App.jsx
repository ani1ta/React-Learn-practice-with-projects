// eslint-disable-next-line no-unused-vars
import React from "react";
import Joke from "./Joke"

export default function App(){
  return (
    <div>
      <Joke 
         Punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke 
        Setup= "I got my daughter a fridge for her birthday."
        Punchline = "I can't wait to see her face light up when she opens it."
        
      />
      <Joke 
        Setup = "How did the hacker escape the police?"
        Punchline =" He just ransomware!"
      />
      <Joke
        Setup = "Why don't pirates travel on mountain roads?"
        Punchline = "Scurvy."
      />
      <Joke 
        Setup = "Why do bees stay in the hive in the winter?"
        Punchline = "Swarm."
      />
      <Joke 
        Setup = "What's the best thing about Switzerland?"
        Punchline = "I don't know, but the flag is a big plus!"
      />

    </div>
  )
}