import {TodoCard} from './TodoCard'

export function TodoList(props) {
    const {todos, tabSelected} = props
    const filteredTodoList = tabSelected==="All" ? todos:
        tabSelected==="Open" ? todos.filter((val) => !val.complete):
        todos.filter((val) => val.complete)
    return(
        <>
        {filteredTodoList.map((todo, todoIndex)=>{
            return(
                <TodoCard todoIndex={todos.findIndex(val=> val.input == todo.input)} key={todoIndex} {...props} todo={todo} />
            )
        })}
        </>
    )
}