import {
  getDocs,
  collection,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
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
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h2>Oczekujące zlecenia</h2>
          </ListSubheader>
        }
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
      </List>
    </>
  );
};

export default TasksPricing;
