import RejectPricing from "../RejectPricing";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../src/firebase.js";
import SubmitPricing from "../SubmitPricing";
import MapSingleRepair from "./MapSingleRepair";
import { useState, useEffect } from "react";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import GetClientName from "./GetClientName";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MapRepairs = ({
  getRepairs,
  repair,
  setEnabledEdits,
  enabledEdits,
  updateTaskPrice,
}) => {
  const [open, setOpen] = React.useState(false);
  const [clients, setClients] = useState([]);

  const getClients = () => {
    const clientsCollection = collection(db, "clients");
    onSnapshot(clientsCollection, (querySnapshot) => {
      const clients = querySnapshot.docs.map((client) => ({
        id: client.id,
        ...client.data(),
      }));
      setClients(clients);
    });
  };
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getClients();
  }, []);
  return (
    <>
      <div
        className="clientsData"
        style={{ marginTop: "20px", paddingBottom: "10px" }}
      >
        <ListItemButton>
          <ListItemIcon>
            <DirectionsCarFilledIcon sx={{ color: "#d90000" }} />
          </ListItemIcon>
          <ListItemText
            primary={`Pojazd: ${repair.carBrand} | VIN: ${repair.carVin}`}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircle sx={{ color: "#d90000" }} />
          </ListItemIcon>
          <ListItemText primary={`Klient: `} />
          <GetClientName clients={clients} repair={repair} />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <CarRepairIcon sx={{ color: "#d90000" }} />
          </ListItemIcon>
          <ListItemText primary="Zlecone usługi:" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {repair.tasks.map((task, index) => (
              <MapSingleRepair
                key={index}
                repair={repair}
                task={task}
                index={index}
                enabledEdits={enabledEdits}
                setEnabledEdits={setEnabledEdits}
                updateTaskPrice={updateTaskPrice}
              />
            ))}
          </List>
        </Collapse>

        <SubmitPricing getRepairs={getRepairs} repair={repair} />
        <RejectPricing getRepairs={getRepairs} repair={repair} />
      </div>
    </>
  );
};
export default MapRepairs;
