import React, {useContext, useState} from 'react';
import './App.css';
import Memo from "./Memo";
import {TodoContext} from "./context";
export interface ITodo {
     todo: string;
     color: string;
 }

//React.ReactElement 라는 타입이있음 
// 제네릭에는 props 의 값을 넣는다

function App(): React.ReactElement<{}> {
    const [todo,setTodo] = useState<string>("");
    // const [todoList,setTodoList] = useState<ITodo[]>([]);
    const { todoList,setTodoList } = useContext(TodoContext)
  return (
    <div className="App">
      <div style={{boxSizing:"border-box", padding: "32px"}}>
        <form
            style={{display:"flex", justifyContent:"center"}}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                setTodoList((oldTodoList) => [...oldTodoList,{todo, color: "#" + Math.round(Math.random() * 16700000).toString(16)}])
            }}
        >
          <input
              style={{marginRight: "16px"}}
              value={todo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
          />
            <button type={"submit"}>추가</button>
        </form>
      <div style={{ position: "relative", boxSizing:"border-box", padding: "24px"}}></div>
          {
              todoList.map(data => (<Memo todo={data.todo} color={data.color} key={data.todo}></Memo>))
          }
      </div>
    </div>
  );
}

export default App;
