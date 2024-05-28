/* eslint-disable no-unused-vars */
import React from "react";


export default function ReactForm(){

    const [formData, setFormData]  = React.useState(
        {firstName : "", lastName : ""}
    )
   

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
                placeholder="First Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}