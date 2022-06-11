import EditTasks from "./EditTasks";

const MapSingleRepair = ({ task, index, updateTaskPrice, repair }) => {
  return (
    <>
      <li key={index}>
        <p style={{ display: "inline" }}>
          {task.task.toLowerCase()}
          {": "}
        </p>
        <EditTasks
          task={task}
          repair={repair}
          index={index}
          updateTaskPrice={updateTaskPrice}
        />
      </li>
    </>
  );
};

export default MapSingleRepair;
