import React from 'react'
import './TodoItem.scss'

const TodoItem = ({
    todos,
    setTodos,
    todoEdit,
    setTodoEdit,
    editText,
    setEditText,
}: {
    todos: any
    setTodos: Function
    todoEdit: number | null
    setTodoEdit: Function
    editText: string
    setEditText: Function
}) => {
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
        <div>
            {todos.map((todo: any) => (
                <div className='todo-item' key={todo.id}>
                    {todoEdit === todo.id ? (
                        <div>
                            <div className='div-edit'>
                                <input
                                    type='text'
                                    onChange={event =>
                                        setEditText(event.target.value)
                                    }
                                    value={editText}
                                />
                                <button onClick={() => submitEditTodo(todo.id)}>
                                    Submit edit
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`todo ${
                                todo.completed ? 'completed' : ''
                            }`}
                        >
                            <div className='p-checkbox-container'>
                                {/* <input
                                    className='checkbox'
                                    type='checkbox'
                                    onChange={() =>
                                        inputToggleComplete(todo.id)
                                    }
                                    checked={todo.completed}
                                /> */}
                                {/*  */}
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
                                {/*  */}

                                <p>{todo.text}</p>
                            </div>
                            <div>
                                <button onClick={() => setTodoEdit(todo.id)}>
                                    Edit
                                </button>
                                <button
                                    className='delete-button'
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default TodoItem
