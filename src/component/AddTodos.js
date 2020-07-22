import React, { useState } from 'react'




function AddTodos(props) {
    const [text, setText] = useState("")

    const submitForm = (e) => {
        e.preventDefault()
        props.addtodos(text)
        setText("")
    }

    return ( <
        div >
        <
        form style = { topBox }
        onSubmit = { submitForm } >
        <
        input type = "text"
        placeholder = "What do you want to do?"
        style = { todoStyle }
        value = { text }
        onChange = {
            (e) => setText(e.target.value)
        }
        / > <
        button className = "button"
        style = { btn } > Add Todo < /button> < /
        form >
        <
        /
        div >
    )
}


const todoStyle = {
    //display: 'inline-block',
    margin: "0 auto",
    marginTop: "5px",
    marginBottom: '5px',
    display: 'block',
    width: '95%',
    border: '2px solid lightgrey',
    borderRadius: '5px',
    padding: '10px'
}
const topBox = {
    margin: "1px 0 1px 0",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "lightgray"
}

const btn = {
    margin: "0 auto",
    width: "95%",
    display: 'block',
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "aqua",
    border: "2px solid aqua",
    marginBottom: '25px',
    color: "white",
    fontSize: "14px",
    cursor: "pointer"
}

export default AddTodos