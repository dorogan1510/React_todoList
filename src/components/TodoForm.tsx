import React from 'react'
import './TodoForm.scss'

interface newTodoInterface {
    id: number
    text: string
    complete: boolean
}

const TodoForm = ({
    todo,
    setTodo,
    todos,
    setTodos,
}: {
    todo: string
    setTodo: Function
    todos: newTodoInterface[]
    setTodos: Function
}) => {
    const inputChangeHandler = (event: any) => setTodo(event.target.value)

    const formSubmitHandler = (event: any) => {
        event.preventDefault()

        const newTodo: newTodoInterface = {
            id: Math.random(),
            text: todo,
            complete: false,
        }

        setTodos([...todos].concat(newTodo))
        setTodo('')
    }
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <input type='text' onChange={inputChangeHandler} value={todo} />
                <button type='submit'>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
