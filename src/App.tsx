import React, { useEffect, useState } from 'react'
import './App.scss'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

const App = () => {
    interface newTodoInterface {
        id: number
        text: string
        complete: boolean
    }

    const [todos, setTodos] = useState<newTodoInterface[]>([])
    const [todo, setTodo] = useState<string>('')
    const [todoEdit, setTodoEdit] = useState<number | null>(null)
    const [editText, setEditText] = useState<string>('')

    useEffect(() => {
        const temp: any = localStorage.getItem('myTodo')
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos) {
            setTodos(loadedTodos)
        } else console.log('d')
    }, [])

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem('myTodo', temp)
    }, [todos])

    return (
        <div className='App'>
            <TodoForm
                todo={todo}
                setTodo={setTodo}
                todos={todos}
                setTodos={setTodos}
            />
            <TodoItem
                todos={todos}
                setTodos={setTodos}
                todoEdit={todoEdit}
                setTodoEdit={setTodoEdit}
                editText={editText}
                setEditText={setEditText}
            />
        </div>
    )
}

export default App
