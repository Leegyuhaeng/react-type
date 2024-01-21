import React,{useState} from "react";
import {ITodo} from "./App";

interface ContextProps {
    children: React.ReactNode
}

interface ITodoContext {
    todoList: ITodo[],
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const TodoContext = React.createContext<ITodoContext>({
    todoList: [],
    setTodoList: () => []
})

const TodoContextProvider = ({children} : ContextProps) => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    return (
        <TodoContext.Provider value={{todoList, setTodoList}}>
            {children}
        </TodoContext.Provider>
    )
}
export {TodoContext,TodoContextProvider};