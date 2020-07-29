import React, { useState } from 'react'
import AddTodos from './AddTodos'
//import TodoFilter from './TodoFilter'



function TodoList(props) {
    const [todos, settodo] = useState([])
    const [getValue, setGetValue] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const addtodos = (title) => {
        // const items = {
        //     id: todos.length,
        //     title: title
        // }
        settodo([...todos, title]);
    }

    const disStyle = (todo) => {
        if (isChecked) {
            return {
                textDecoration: "line-through"
            }
        } else if (!isChecked) {
            return {
                textDecoration: "none"
            }
        }
    }


    const markCompleted = (todo) => {
        if (!isChecked) {
            console.log("completed ", todo)
            setIsChecked((!isChecked))
        } else if (isChecked) {
            console.log("not completed ", todo)
            setIsChecked((!isChecked))
        }


    }

    const filter = todos.filter(todo => {
        return todo.toLowerCase().includes(getValue.toLowerCase())
    })

    return ( <
        div >

        <
        div style = { topBox1 } >
        <
        input type = "text"
        placeholder = "Enter Value"
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



        <
        div style = { topBox } > {
            filter.map(
                (todo) => ( < h3 key = { todo }
                    style = { disStyle(todo) } >
                    <
                    input type = "checkbox"
                    onChange = {
                        () => markCompleted(todo)
                    }
                    /> { todo } < /
                    h3 > )
            )
        }

        <
        /div >

        <
        AddTodos addtodos = { addtodos }
        /> < /
        div >
    )
}

const topBox = {
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "lightgray",
    margin: "0 auto",
    padding: "10px 10px 10px 10px"
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

const topBox1 = {
    margin: "5px 0 1px 0",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "lightgray"
}

export default TodoList