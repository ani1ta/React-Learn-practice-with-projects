/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react'
import memesData from './memesData'
export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

 /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
    function handlememeButton(){
        // console.log("clicked")
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
       // memesArray[randomNumber].url  <-- this line is incomplete!

        // debugger
    }

    return(
        <main>
            <div className='form'>
                <input type='text'
                   placeholder='Shut up'
                    className='form--input'
                />
                    <input type='text'
                    placeholder='and Take my money'
                    className='form--input'/>

                <button className='form--button' onClick={handlememeButton}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className='meme--image'/>
        </main>
    )
}