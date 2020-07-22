import React from 'react'

function TodoList(props) {
    return ( <
        div style = { topBox } >
        <
        ul >
        <
        li > eat breakfast < /li> <
        li > sleep < /li> <
        li > work < /li> <
        li > eat dinner < /li> <
        li > visit a friend < /li> { props.todo } < /
        ul > < /
        div >
    )
}

const topBox = {
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "lightgray",
    margin: "0 auto",
    padding: "0 10px 0 10px"
}

export default TodoList