import React, { useState, useEffect } from 'react'

function TodoFilter(props) {
    const [getValue, setGetValue] = useState("")

    // const getKey = (e) => {
    //     console.log(e.target.value)
    //     props.todos.map(todo => {
    //         if (todo.indexOf(e.target.value) > -1) {
    //             return console.log('i can get the todos')
    //         } else {
    //             return console.log('i cant get the todos')
    //         }
    //     })
    // }



    return ( <
        div style = { topBox } >
        <
        input type = "text"
        placeholder = "Enter Value"
        onKeyUp = { props.filter(getValue) }
        value = { getValue }
        onChange = {
            (e) => setGetValue(e.target.value)
        }
        style = { todoStyle }
        / >  <
        div className = "check"
        style = {
            { display: "flex", alignItems: "center", margin: "0 auto", width: '95%', marginBottom: '10px' }
        } >
        <
        input type = "checkbox"
        style = {
            { marginRight: "10px" }
        }
        /> <
        h4 > Show completed Todos < /h4>   < /
        div >

        <
        /
        div >
    )
}


const todoStyle = {
    //display: 'inline-block',
    margin: "0 auto",
    marginTop: "10px",
    marginBottom: '10px',
    display: 'block',
    width: '95%',
    border: '2px solid lightgrey',
    borderRadius: '5px',
    padding: '10px'
}
const topBox = {
    margin: "5px 0 1px 0",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "lightgray"
}

export default TodoFilter