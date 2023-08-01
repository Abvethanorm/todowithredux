import { useSelector } from "react-redux/es/hooks/useSelector";

const Display = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      <h1>What needs to get Done?</h1>
      {tasks.map((task) => {
        return <p key={task}>{task}</p>;
      })}
    </div>
  );
};

export default Display;
