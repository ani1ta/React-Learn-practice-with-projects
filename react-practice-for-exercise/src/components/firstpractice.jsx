/* eslint-disable no-unused-vars */
import React from "react"

function firstPractice() {

    function handleClick(){
      console.log('Click button')
    }
  
    function handleOnHover(){
  
      console.log("Mouse Over")
    }
  
    return (
      <div className='container'>
        <img src="https://picsum.photos/640/360"
        onMouseOver={handleOnHover}
        />
        <button onClick={handleClick}>Click Me</button>
      </div>
    )
  }
  
export default firstPractice
