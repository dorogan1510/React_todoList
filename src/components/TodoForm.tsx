import React, { useState } from 'react'
import './TodoForm.scss'

interface newTodoInterface {
    id: number
    text: string
    complete: boolean
    inputId: string
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
    const [isActive, setIsActive] = useState(true)

    const inputChangeHandler = (event: any) => setTodo(event.target.value)

    const formSubmitHandler = (event: any) => {
        event.preventDefault()

        const newTodo: newTodoInterface = {
            id: Math.random(),
            text: todo,
            complete: false,
            inputId: Math.random().toString(),
        }

        if (todo.trim().length > 0) {
            setTodos([...todos].concat(newTodo))
            setTodo('')
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <div>
            <form className='form' onSubmit={formSubmitHandler}>
                <input
                    className={`form__input ${!isActive ? 'danger' : ''}`}
                    // placeholder='Insert your todo'
                    placeholder={
                        isActive
                            ? 'Insert your todo'
                            : 'You don`t insert your todo'
                    }
                    type='text'
                    onChange={inputChangeHandler}
                    value={todo}
                />
                <button type='submit'>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
