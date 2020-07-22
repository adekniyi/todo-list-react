import React from 'react'

function TodoFilter() {
    return ( <
        div style = { topBox } >
        <
        input type = "text"
        placeholder = "Enter Value"
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
        div > <
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