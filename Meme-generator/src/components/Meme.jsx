/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react'
import memesData from './memesData'
export default function Meme(){

 /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */

    function handlememeButton(){
        // console.log("clicked")
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        console.log('URL: ',url)

        // debugger
    }

    return(
        <main>
            <form className='form'>
                <label htmlFor='top-text'>Top text
                <input type='text'
                   placeholder='Shut up'
                    className='form--input'
                />
                </label>
                
                <label> Bottom text 
                    <input type='text'
                    placeholder='and Take my money'
                    className='form--input'/>
                </label>

                <button className='form--button' onClick={handlememeButton}>
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}