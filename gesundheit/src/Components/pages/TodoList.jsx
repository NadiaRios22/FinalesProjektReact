import React, { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("listToDo");
    if (storedItems) {
      setItem(JSON.parse(storedItems));
    }
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem("listToDo", JSON.stringify(items));
  };

  const addItem = () => {
    if (newItem.trim() !== "") {
      const newItemObjekt = { id: Date.now(), text: newItem, completed: false };
      setItem([...item, newItemObjekt]);
      updateLocalStorage([...item, newItemObjekt]);
      setNewItem("");
    }
  };

  const deleteItem = (itemId) => {
    const updatedItems = item.filter((i) => i.id !== itemId);
    setItem(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const toggleItem = (itemId) => {
    const updatedItems = item.map((i) =>
      i.id === itemId ? { ...i, completed: !i.completed } : i
    );
    setItem(updatedItems);
    updateLocalStorage(updatedItems);
  };

  return (
    <div className="TodoList">
      <h1>Todo List App</h1>
      <div className="image-titel-todo-list">
        <img src="/images/photo_2023-12-03_16-23-05.jpg" alt="" />
      </div>
      <div className="inputTodoList">
        <input
          className="inputTodo"
          type="text"
          placeholder="meine Ziele für heute..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="buttonTodo" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="listTodo">
        <ul>
          {item.map((i) => (
            <li key={i.id}>
              <span
                style={{
                  textDecoration: i.completed ? "line-through" : "none",
                }}
              >
                {i.text}
              </span>
              <div className="buttons">
                <button
                  className="buttonToggleItem"
                  onClick={() => toggleItem(i.id)}
                >
                  {i.completed ? "zurück" : "erledigt"}
                </button>
                <button
                  className="buttonDelete"
                  onClick={() => deleteItem(i.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
