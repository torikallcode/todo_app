import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };
  return (
    <form
      className="TodoForm  w-full overflow-hidden flex items-center border border-blue-500"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="todo-input p-2 text-sm w-full bg-transparent text-white"
        value={value}
        placeholder="Add Todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="todo-btn bg-blue-600 p-2 text-sm text-white font-semibold"
      >
        Add
      </button>
    </form>
  );
};
