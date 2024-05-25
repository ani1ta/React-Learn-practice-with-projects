/* eslint-disable no-unused-vars */
import React from "react";

export default function ConditionalRenderingPractice(){
    const [messages, setMessages] = React.useState(["a" , "b", "c"])

    return (
        <div >
            {/* {
                messages.length > 0 && 
                <h1>You have {messages.length} unread messages</h1>
            } */}


            {
                messages.length === 0 ?
                // eslint-disable-next-line react/no-unescaped-entities
                <h1>You're all caught up </h1> :
                <h1>
                    You have {messages.length} unread {messages.length > 1 ? "messages" : "message"} 
                </h1>
            }
        </div>
    )
}