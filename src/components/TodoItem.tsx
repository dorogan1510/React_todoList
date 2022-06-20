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
                <div key={todo.id}>
                    {todoEdit === todo.id ? (
                        <input
                            type='text'
                            onChange={event => setEditText(event.target.value)}
                            value={editText}
                        />
                    ) : (
                        <div
                            className={`todo ${
                                todo.completed ? 'completed' : ''
                            }`}
                        >
                            {todo.text}
                        </div>
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

export default TodoItem
