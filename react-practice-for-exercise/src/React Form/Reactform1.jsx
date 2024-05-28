/* eslint-disable no-unused-vars */
import React from "react";


export default function ReactForm(){

    const [formData, setFormData]  = React.useState(
        {firstName : "", lastName : "", emauil : ""}
    )
   

    /**
     * Challenge: add an email field/state to the form
     */
    

    console.log(formData)
    
    function handleChange(event){
        setFormData(prevFormData => {
             return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    return(
        <form>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
            <input 
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}