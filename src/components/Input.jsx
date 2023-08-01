import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodo } from "../redux/slices/todoSlice";
export const Input = () => {
  const [input, setInput] = useState("");
  const add = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  const clear = () => {
    dispatch(clearTodo());
  };
  const set = (e) => {
    setInput(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="what's next?"
        onChange={set}
        value={input}
      />
      <button onClick={add}>add todo</button>
      <button onClick={clear}>clear todo</button>
    </div>
  );
};
