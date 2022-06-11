import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../src/firebase.js";
import MapRepairs from "./FilterRepairs/MapRepairs.jsx";

const tasksPricing = () => {
  const [repairs, setRepairs] = useState([]);

  const handleUpdateKey = (e) => {};

  const updateTaskPrice = (value, repair, index) => {
    console.log(repair);
    const tasks = [...repair.tasks];
    const editedTask = { ...tasks[index], price: value };
    tasks[index] = editedTask;

    const taskRef = doc(db, "repairs", repair.id);
    updateDoc(taskRef, {
      tasks,
    });
    getRepairs();
  };

  const getRepairs = () => {
    const tasksCollection = collection(db, "repairs");
    getDocs(tasksCollection).then((querySnapshot) => {
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
      <ul>
        {repairs
          .filter((obj) => {
            return obj.totalCost === null;
          })

          .map((repair) => {
            return (
              <MapRepairs
                key={repair.id}
                repair={repair}
                updateTaskPrice={updateTaskPrice}
              />
            );
          })}
      </ul>
    </>
  );
};

export default tasksPricing;
