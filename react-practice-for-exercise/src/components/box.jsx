/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Box(props){

    
    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }

    return(
        <button 
            style={styles} 
            className='box' 
            onClick={ () => props.toggle(props.id) }>
        </button>
    )


}