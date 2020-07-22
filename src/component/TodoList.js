import React, { useState } from 'react'
import AddTodos from './AddTodos'
import TodoFilter from './TodoFilter'



function TodoList(props) {
    const [todos, settodo] = useState([])
    const addtodos = (title) => {
        // const items = {
        //     id: todos.length,
        //     title: title
        // }
        settodo([...todos, title]);
    }


    return ( <
            div >
            <
            TodoFilter todos = { todos }
            / > <
            div style = { topBox } > {
                todos.map(todo => < h3 key = { todo }
                    style = {
                        { paddingBottom: "10px" }
                    } > { todo } < /h3>) } < /
                    div > <
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

            export default TodoList