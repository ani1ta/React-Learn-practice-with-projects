// eslint-disable-next-line no-unused-vars
import React from "react";

   /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */

function ComplextUseState(){
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length +1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

export default ComplextUseState