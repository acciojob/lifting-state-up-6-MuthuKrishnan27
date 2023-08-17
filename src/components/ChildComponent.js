import React from "react";

const ChildComponent = ({todos,setTask})=>{

    return(
        <div>
            <ul>
            <h1>Child Component</h1>
                {
                    todos.map((todo)=>{
                        return(
                            <li>{todo.text}
                            {todo.state==false && <button onClick={()=>setTask(todo)}>Complete</button>}
                            </li>  
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ChildComponent