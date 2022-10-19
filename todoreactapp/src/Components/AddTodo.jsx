import React, { useState } from "react";
import styled from "styled-components";

export const AddTodo = ({ onAdd }) => {
  const [addtodo, setAddTodo] = useState("");

  const postTodo = async (value) => {
    let res = await fetch(`http://localhost:8080/todoslist`, {
      method: "POST",
      body: JSON.stringify({
        value,
        completed: false,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();
    onAdd(data);
  };

  return (
    <AddTodoMainDiv>
      <h2>Todo App</h2>
      <InputBtnDiv>
        <input
          type="text"
          placeholder="Mention Your Task Here"
          value={addtodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button
          onClick={() => {
            let value = addtodo.trim();
            if (value) {
              postTodo(value);
              setAddTodo("");
            }
          }}
        >
          ADD
        </button>
      </InputBtnDiv>
    </AddTodoMainDiv>
  );
};

const AddTodoMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const InputBtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
