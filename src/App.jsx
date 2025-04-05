import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import {TodoList} from './components/TodoList'
import {TodoInput} from './components/TodoInput'
import {useState, useEffect} from 'react'

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }])
  const [tabSelected, setTabSelected] = useState("Open")
  
  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveTodos(newTodoList)
  }

  function handleCompleteTodo(todoIndex){
    let newTodoList = [...todos]
    let completedTodo = newTodoList[todoIndex]
    completedTodo["complete"] = true
    newTodoList[todoIndex] = completedTodo
    setTodos(newTodoList)
    handleSaveTodos(newTodoList)
  }

  function handleDeleteTodo(todoIndex){
    let newTodoList = todos.filter((val, index) => {
      return index !== todoIndex
    })
    setTodos(newTodoList)
    handleSaveTodos(newTodoList)
  }

  function handleSaveTodos(currTodos){
    localStorage.setItem("todo-app" ,JSON.stringify({todos:currTodos}))
  }

  useEffect(()=>{
    if (!localStorage || !localStorage.getItem("todo-app")) {return}
    let db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs tabSelected={tabSelected} setTabSelected={setTabSelected} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} tabSelected={tabSelected} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
