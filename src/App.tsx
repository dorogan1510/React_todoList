import React, { useState } from 'react'
import './App.scss'

const App = () => {
    const [todos, setTodos] = useState<any>([])
    const [todo, setTodo] = useState('')
    const [todoEdit, setTodoEdit] = useState(null)
    const [editText, setEditText] = useState('')

    const inputChangeHandler = (event: any) => setTodo(event.target.value)
    const formSubmitHandler = (event: any) => {
        event.preventDefault()

        const newTodo: any = {
            id: new Date().getTime(),
            text: todo,
            complete: false,
        }

        setTodos([...todos].concat(newTodo))
        setTodo('')
    }

    const deleteTodo = (id: any) => {
        const updatedTodos = [...todos].filter((todo: any) => todo.id !== id)

        setTodos(updatedTodos)
    }

    const inputToggleComplete = (id: any) => {
        const updatedTodos = [...todos].map((todo: any) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    const submitEditTodo = (id: any) => {
        const updatedTodos = [...todos].map(todo => {
            if (todo.id === id) {
                todo.text = editText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEdit(null)
        setEditText('')
    }

    return (
        <div className='App'>
            <form onSubmit={formSubmitHandler}>
                <input type='text' onChange={inputChangeHandler} value={todo} />
                <button type='submit'>Add todo</button>
            </form>
            {todos.map((todo: any) => (
                <div key={todo.id}>
                    {todoEdit === todo.id ? (
                        <input
                            type='text'
                            onChange={event => setEditText(event.target.value)}
                            value={editText}
                        />
                    ) : (
                        <div>{todo.text}</div>
                    )}

                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>

                    <input
                        type='checkbox'
                        onChange={() => inputToggleComplete(todo.id)}
                        checked={todo.completed}
                    />

                    {todoEdit === todo.id ? (
                        <button onClick={() => submitEditTodo(todo.id)}>
                            Submit edit
                        </button>
                    ) : (
                        <button onClick={() => setTodoEdit(todo.id)}>
                            Edit
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default App
