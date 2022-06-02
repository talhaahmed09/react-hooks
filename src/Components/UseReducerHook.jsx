import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function reduceTodo(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
      };

    default:
      return state;
  }
}

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [{todos}, dispatch2] = useReducer(reduceTodo, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <br />
      <br />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch2({ type: "add-todo", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Enter Todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      {todos.map((t, idx) => (
        <button
          key={idx}
          onClick={() => dispatch2({ type: "toggle-todo", idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </button>
      ))}
    </div>
  );
};

export default UseReducerHook;
