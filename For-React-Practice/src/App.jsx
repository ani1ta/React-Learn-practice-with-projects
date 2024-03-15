/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// import React from "react";
// import Joke from "./Joke"

// export default function App(){
//   return (
//     <div>
//       <Joke 
//          Punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."


//       />
//       <Joke 
//         Setup= "I got my daughter a fridge for her birthday."
//         Punchline = "I can't wait to see her face light up when she opens it."
        
//       />
//       <Joke 
//         Setup = "How did the hacker escape the police?"
//         Punchline =" He just ransomware!"
//       />
//       <Joke
//         Setup = "Why don't pirates travel on mountain roads?"
//         Punchline = "Scurvy."
//       />
//       <Joke 
//         Setup = "Why do bees stay in the hive in the winter?"
//         Punchline = "Swarm."
//       />
//       <Joke 
//         Setup = "What's the best thing about Switzerland?"
//         Punchline = "I don't know, but the flag is a big plus!"
//       />

//     </div>
//   )
// }


// // eslint-disable-next-line no-unused-vars
// import React from "react"
// import Joke from "./Joke"

// /*
// Challenge: Think critically - how would you pass in a prop that wasn't
// a string datatype.

// E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
// prop that is a number, as well as a prop with an array of comments, and a boolean
// of whether the joke is a pun (`isPun`).
// */

// export default function App() {
//     return (
//         <div>
//             <Joke 
//                 punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//                 isPun={true}
//                 upvotes={10}
//                 downvotes={2}
//                 comments={[{author: "", body: "", title: ""}]}
//             />
//             <Joke 
//                 setup="I got my daughter a fridge for her birthday." 
//                 punchline="I can't wait to see her face light up when she opens it." 
//                 isPun={false}
//             />
//             <Joke 
//                 setup="How did the hacker escape the police?" 
//                 punchline="He just ransomware!"
//                 isPun={true}
//             />
//             <Joke 
//                 setup="Why don't pirates travel on mountain roads?" 
//                 punchline="Scurvy." 
//                 isPun={true}
//             />
//             <Joke 
//                 setup="Why do bees stay in the hive in the winter?" 
//                 punchline="Swarm." 
//                 isPun={true}
//             />
//             <Joke 
//                 setup="What's the best thing about Switzerland?" 
//                 punchline="I don't know, but the flag is a big plus!" 
//                 isPun={false}
//             />
//         </div>
//     )
// }


// eslint-disable-next-line no-unused-vars
import React from "react"
import Joke from "./Joke"
import JokesData from "./JokesData"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {
    const jokeElements = JokesData.map(joke =>{
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
            // <Joke 
            //     punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            // />
            // <Joke 
            //     setup="I got my daughter a fridge for her birthday." 
            //     punchline="I can't wait to see her face light up when she opens it." 
            //     isPun={false}
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?" 
            //     punchline="He just ransomware!"
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?" 
            //     punchline="Scurvy." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?" 
            //     punchline="Swarm." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?" 
            //     punchline="I don't know, but the flag is a big plus!" 
            //     isPun={false}
            // />
