import React from "react";
import { ImCross} from "react-icons/im";
import './todo.css'

const Todo = (props) => {

  return (
    <>
  
      <div className="col-md-3 m-2 border todo-card">
      <ImCross className="icon-style" onClick={()=>{
            props.onSelect(props.id)
        }}/>
      
        <div className="content">{props.text}</div>
        <span className="date-style text-muted">{new Date().toLocaleString()}</span>
      </div>
    </>
  );
}; 
export default Todo;
