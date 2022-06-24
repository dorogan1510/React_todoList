import React, { useEffect, useState } from 'react'
import './TodoForm.scss'
import addButton from '../img/add_button.png'

interface newTodoInterface {
    id: number
    text: string
    completed: boolean
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
            completed: false,
            inputId: Math.random().toString(),
        }

        if (todo.trim().length > 0) {
            setTodos([newTodo].concat(todos))
            setTodo('')
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    useEffect(() => {
        if (todo.trim().length > 0) {
            setIsActive(true)
        }
    }, [todo])

    return (
        <div>
            <form className='form' onSubmit={formSubmitHandler}>
                <input
                    className={`form__input ${!isActive ? 'danger' : ''}`}
                    placeholder={
                        isActive
                            ? 'Insert your todo'
                            : 'You didn`t write anything'
                    }
                    type='text'
                    onChange={inputChangeHandler}
                    value={todo}
                />
                <button type='submit'>
                    <img
                        alt='img'
                        src={addButton}
                        width={'30px'}
                        height={'30px'}
                    ></img>
                </button>
            </form>
        </div>
    )
}

export default TodoForm
