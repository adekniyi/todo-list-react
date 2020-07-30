import React, { useState } from 'react'
import AddTodos from './AddTodos'
import "../App.css"


function TodoList(props) {
    const [todos, settodo] = useState([])
    const [getValue, setGetValue] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const addtodos = (title) => {
        settodo([...todos, title]);
    }


    const markCompleted = (todo) => {
        settodo([...todos.map((todoI) => {
            if (todoI === todo) {
                setIsChecked((!isChecked))
            }
            return todoI
        })]);
    }

    const delTodo = (todo) => {
        settodo([...todos.filter((todoL) => todoL !== todo)]);

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
        / > 

        <
        /
        div >



        <
        div style = { topBox } > {
            filter.map(
                (todo) => ( < h3 key = { todo }
                    style = {
                        h
                    } >
                    <
                    div >
                    <
                    input type = "checkbox"
                    onChange = {
                        () => markCompleted(todo)
                    }
                    /> { todo }  < /
                    div > <
                    button style = { btnStyle }
                    onClick = {
                        () => delTodo(todo)
                    } > X < /button> < /
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


const h = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
}

const topBox = {
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "lightgray",
    margin: "0 auto",
    padding: "10px 10px 10px 10px",

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

const btnStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer"
}

export default TodoList