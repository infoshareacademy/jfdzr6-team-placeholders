import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../src/firebase.js";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import MapOffers from "./FilterOffer/MapOffers.jsx";
const ShowOffer = ({ userId }) => {
  const [repairs, setRepairs] = useState([]);

  const clientId = userId;

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
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      >
        {repairs
          .filter((obj) => {
            return (
              obj.totalCost !== null &&
              obj.isAccepted === null &&
              obj.clientId === clientId
            );
          })
          .map((repair) => {
            return (
              <MapOffers
                getRepairs={getRepairs}
                key={repair.id}
                repair={repair}
              />
            );
          })}
      </List>
    </>
  );
};
export default ShowOffer;
