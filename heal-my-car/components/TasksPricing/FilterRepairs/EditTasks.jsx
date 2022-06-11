import { useState } from "react";

const EditTasks = ({ index, task, updateTaskPrice, repair }) => {
  const [enabledEdits, setEnabledEdits] = useState([]);

  return (
    <>
      {!enabledEdits.includes(index) ? (
        <p
          style={{ display: "inline" }}
          onDoubleClick={() =>
            setEnabledEdits((current) => [...current, index])
          }
        >
          {task.price == null ? 0 : task.price}

          {" zł"}
          {", "}
        </p>
      ) : (
        <input
          onBlur={(e) => {
            if (e.target.value.trim() !== "") {
              updateTaskPrice(e.target.value, repair, index);
              console.log(e.target.value, repair.id);
              setEnabledEdits((current) =>
                current.filter((el) => el !== index)
              );
            }
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              updateTaskPrice(e.target.value, repair, index);
              setEnabledEdits((current) =>
                current.filter((el) => el !== index)
              );
              console.log("halo");
            }
          }}
        ></input>
      )}
    </>
  );
};
export default EditTasks;