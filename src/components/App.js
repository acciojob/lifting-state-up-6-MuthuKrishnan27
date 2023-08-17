
import React,{useState} from "react";
import './../styles/App.css';
// import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

const App = () => {
  
  const [todos,setTodos] = useState([
    {id:1,text:"Learn React",state:false},
    {id:2,text:"Build a React app",state:false},
    {id:3,text:"Deploy the React app",state:false}
  ])

  const [task,setTask] = useState("");
  console.log(task)
  todos.map((todo)=>{
    if(todo === task ){
      todo.state = true;
    }
  })
  return (
    <div>
       <h1>Parent Component</h1>
       <ChildComponent todos={todos} setTask={setTask}/>
    </div>
  )
}

export default App
