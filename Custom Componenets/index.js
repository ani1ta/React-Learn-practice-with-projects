/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

//   import React from "react"
//   import ReactDOM from "react-dom"
  
  // const page = (
  //     <div>
  //         <img src="react-logo.jpg" width="40px" alt="react logo" />
  //         <h1>Fun facts about React</h1>
  //         <ul>
  //             <li>Was first released in 2013</li>
  //             <li>Was originally created by Jordan Walke</li>
  //             <li>Has well over 100K stars on GitHub</li>
  //             <li>Is maintained by Facebook</li>
  //             <li>Powers thousands of enterprise apps, including mobile apps</li>
  //         </ul>
  //     </div>
  // )


  // function PageName(){
  //         return(
  //           <div>
  //               <img src="react-logo.jpg" width="40px" alt="react logo" />
  //               <h1>Fun facts about React</h1>
  //               <ul>
  //                   <li>Was first released in 2013</li>
  //                   <li>Was originally created by Jordan Walke</li>
  //                   <li>Has well over 100K stars on GitHub</li>
  //                   <li>Is maintained by Facebook</li>
  //                   <li>Powers thousands of enterprise apps, including mobile apps</li>
  //               </ul>
  //           </div>
  //       )

  //   }
  
  // // ReactDOM.render(page, document.getElementById("root"))
  // ReactDOM.render(<PageName />, document.getElementById("root"))

  /**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// import React from "react"
// import ReactDOM from "react-dom"

function Page() {
    return (
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))