import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Todo from "../Todo.js";
// import { GrAdd} from "react-icons/gr";
import "./main.css";

const Main = () => {
  const [font, setFont] = useState("");
  const [color , setColor] = useState("");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleCard = () => {
    setTodos((oldVal) => {
      return [...oldVal, todo];
    });
    setTodo("");
  };
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const deleteItem = (id) => {
    setTodos((oldItem) => {
      return oldItem.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const colorHandler=(e)=>{
    setColor(e.target.value);
  }
  const fontHandler=(e)=>{
  setFont(e.target.value);
  }

  return (
    <div className="col-md-8 border p-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 editing-tools">
            <select name="fonts" id="fonts" onChange={fontHandler}>
              <option value="sans-serif">sans-serif</option>
              <option value="Georgia">Georgia</option>
              <option value="cursive">cursive</option>
              <option value="fantasy">fantasy</option>
              <option value="monospace">monospace</option>
            </select>
            <input type="color" id="colorbox" value={color} onChange={colorHandler}  />
          </div>
          <div className="col-md-6">
            <input
              className="todo-input"
              type="text"
              placeholder="Add a Item "
              value={todo}
              onChange={handleChange}
              maxLength="300"
            ></input>
            <Button variant="outline-success" className="add-btn" onClick={handleCard}>
              {/* <GrAdd /> */} +
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row reverse-row justify-content-center" style={{color:color, fontFamily:font}} >
        {todos.map((item, index) => {
          return (
            <Todo text={item}
             id={index} 
             key={index} 
             onSelect={deleteItem} 
             />
          );
        })}
      </div>
    </div>
  );
};
export default Main;
