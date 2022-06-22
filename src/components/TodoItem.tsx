import React, { useState, useEffect } from 'react'
import './TodoItem.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import deleteBtn from '../img/delete.png'
import editBtn from '../img/edit.png'
import submitEditBtn from '../img/submit_edit.png'

const TodoItem = ({
    todo,
    todos,
    setTodos,
    todoEdit,
    setTodoEdit,
    editText,
    setEditText,
}: {
    todo: any
    todos: any
    setTodos: Function
    todoEdit: number | null
    setTodoEdit: Function
    editText: string
    setEditText: Function
}) => {
    const [isActive, setIsActive] = useState(true)

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
        editText.trim().length > 0 ? setIsActive(true) : setIsActive(false)
        if (editText.trim().length > 0) {
            setIsActive(true)
            const updatedTodos = [...todos].map(todo => {
                if (todo.id === id) {
                    todo.text = editText
                }
                return todo
            })
            setTodos(updatedTodos)
            setTodoEdit(null)
        } else {
            setIsActive(false)
        }

        setEditText('')
    }

    useEffect(() => {
        if (editText.trim().length > 0) {
            setIsActive(true)
        }
    }, [editText])

    return (
        <div>
            <TransitionGroup className='todo-list'>
                {todos.map((todo: any) => (
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames='alert'
                    >
                        <div className='todo-item' key={todo.id}>
                            {todoEdit === todo.id ? (
                                <div>
                                    <div className='div-edit'>
                                        <input
                                            type='text'
                                            className={`edit-input ${
                                                isActive ? '' : 'danger'
                                            }`}
                                            placeholder={
                                                isActive
                                                    ? ''
                                                    : 'You didn`t write anything'
                                            }
                                            onChange={event =>
                                                setEditText(event.target.value)
                                            }
                                            value={editText}
                                        />
                                        <button
                                            className='buttons'
                                            onClick={() =>
                                                submitEditTodo(todo.id)
                                            }
                                        >
                                            <img
                                                alt='img'
                                                src={submitEditBtn}
                                                width={'30px'}
                                                height={'30px'}
                                            ></img>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='todo'>
                                    <div className='p-checkbox-container'>
                                        <div className='relative-checkbox'>
                                            <input
                                                type='checkbox'
                                                className='_checkbox'
                                                id={todo.inputId}
                                                onChange={() =>
                                                    inputToggleComplete(todo.id)
                                                }
                                                checked={todo.completed}
                                            />
                                            <label htmlFor={todo.inputId}>
                                                <div id='tick_mark'></div>
                                            </label>
                                        </div>

                                        <p
                                            className={`${
                                                todo.completed
                                                    ? 'line-throw'
                                                    : ''
                                            }`}
                                        >
                                            {todo.text}
                                        </p>
                                    </div>
                                    <div>
                                        <button
                                            className='buttons'
                                            onClick={() => setTodoEdit(todo.id)}
                                        >
                                            <img
                                                alt='img'
                                                src={editBtn}
                                                width={'20px'}
                                                height={'20px'}
                                            ></img>
                                        </button>
                                        <button
                                            className='delete-button buttons'
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            <img
                                                alt='img'
                                                src={deleteBtn}
                                                width={'20px'}
                                                height={'20px'}
                                            ></img>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default TodoItem
