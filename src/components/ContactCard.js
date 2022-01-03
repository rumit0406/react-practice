import React from 'react'

function ContactCard(props) {
    // console.log(props)
    return (
        <div>
            <h1>{props.contact.name}</h1>
            <h2>{props.contact.email}</h2>
            <p>{props.contact.para}</p>
        </div>
    )
}

export default ContactCard