import { useState } from "react";

const EditTasks = ({ index, task, updateTaskPrice, repair }) => {
  const [enabledEdits, setEnabledEdits] = useState([]);

  return (
    <>
      {!enabledEdits.includes(index) ? (
        <p
          style={{
            display: "inline",
            fontFamily: "Calibri",
            fontSize: "18px",
            height: "48px",
            margin: "0px",
            marginTop: "27px",
            padding: "0px",
          }}
          onDoubleClick={() =>
            setEnabledEdits((current) => [...current, index])
          }
        >
          {task.price == null ? 0 : task.price}
          {" zł"}
        </p>
      ) : (
        <input
          style={{
            display: "inline",
            fontFamily: "Calibri",
            minHeight: "20px",
          }}
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
