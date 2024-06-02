/* eslint-disable no-unused-vars */
import React from "react";
import './form.css'

export default function ReactForm(){

    const [formData, setFormData]  = React.useState(
        {
            firstName : "", 
            lastName : "", 
            email : "", 
            comments : "",
            isFriendly : true,
            employed : ""
        }
    )
   

    /**
     * Challenge: add an email field/state to the form
     */
    

    // console.log(formData)

    // console.log(formData.favColor)

    function handleChange(event){
        const {name, value, type, checked}  = event.target
        setFormData(prevFormData => {
             return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */
      

    function submitHandleButton(event){
        event.preventDefault()
        console.log(formData)
    }
    return(
        <form onSubmit={submitHandleButton}>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                name="comments"
                placeholder="Comments"
                onChange={handleChange}
            />
            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly? </label>
            <br/>

            <fieldset>
                <legend>Current EMployment Status</legend>

                <input
                    type="radio"
                    name="employed"
                    id="unemployed"
                    value="unemployed"
                    checked={formData.employed === "unemployed"}
                    onChange={handleChange}
                />
                
                <label htmlFor="unemployed">Unemplyed</label>
                <br />

                <input
                    type="radio"
                    name="employed"
                    id="part-time"
                    value="part-time"
                    checked={formData.employed === "part-time"}
                    onChange={handleChange}
                />

                <label htmlFor="part-time">Part-time</label>

                <br />
                <input
                    type="radio"
                    name="employed"
                    id="full-time"
                    value="full-time"
                    checked={formData.employed === "full-time"}
                    onChange={handleChange}
                />

                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>

            <br />

            <label htmlFor="favColor">What is your fav color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="voilet">Voilet</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                
                
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}