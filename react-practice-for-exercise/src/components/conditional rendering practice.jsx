/* eslint-disable no-unused-vars */
import React from "react";

export default function ConditionalRenderingPractice(){
    const [messages, setMessages] = React.useState(["a" , "b", "c"])

    return (
        <div >
            {
                messages.length > 0 && 
                <h1>You have {messages.length} unread messages</h1>
            }
        </div>
    )
}