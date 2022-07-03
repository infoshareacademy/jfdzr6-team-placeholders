import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../src/firebase.js";
import MapRepairs from "./FilterRepairs/MapRepairs.jsx";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

const TasksPricing = () => {
  const [repairs, setRepairs] = useState([]);

  const updateTaskPrice = (value, repair, index) => {
    console.log(repair);
    const tasks = [...repair.tasks];
    const editedTask = { ...tasks[index], price: parseInt(value) };
    tasks[index] = editedTask;

    const taskRef = doc(db, "repairs", repair.id);
    updateDoc(taskRef, {
      tasks,
    }).then(getRepairs(repairs));
  };

  const getRepairs = () => {
    const tasksCollection = collection(db, "repairs");
    onSnapshot(tasksCollection, (querySnapshot) => {
      const repairs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRepairs(repairs);
    });
  };

  useEffect(() => {
    getRepairs();
  }, []);

  return (
    <>
      <div
        style={{
          dispaly: "flex",
          width: "80%",
          justifyContent: "center",
          gap: "55px",
          margin: "0 auto",
          backgroundColor:'transparent'
        }}
      >
        <h2
          style={{ textAlign: "center", marginTop: "5px", fontFamily: "lato" }}
        >
          Wycena zleceń
        </h2>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            flex: "1 1 auto",
            alignContent: "flex-start",
          }}
          aria-labelledby="nested-list-subheader"
        >
          {repairs
            .filter((obj) => {
              return obj.totalCost === null && !obj.isRejected;
            })

            .map((repair) => {
              return (
                <MapRepairs
                  getRepairs={getRepairs}
                  key={repair.id}
                  repair={repair}
                  updateTaskPrice={updateTaskPrice}
                />
              );
            })}
          <div style={{ width: "550px", backgroundColor: "transparent" }}></div>
          <div style={{ width: "550px", backgroundColor: "transparent" }}></div>
        </List>
      </div>
    </>
  );
};

export default TasksPricing;
