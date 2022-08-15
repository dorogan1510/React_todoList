import React, { Dispatch, useEffect, useState } from 'react'
import './TodoForm.scss'
import addButton from '../img/add_button.png'
import { newTodoInterface } from '../App'

const TodoForm = ({
    todo,
    setTodo,
    todos,
    setTodos,
}: {
    todo: string
    setTodo: Dispatch<string>
    todos: newTodoInterface[]
    setTodos: Dispatch<newTodoInterface[]>
}) => {
    const [isActive, setIsActive] = useState<boolean>(true)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTodo(event.target.value)

    const formSubmitHandler = (event: React.FormEvent) => {
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
