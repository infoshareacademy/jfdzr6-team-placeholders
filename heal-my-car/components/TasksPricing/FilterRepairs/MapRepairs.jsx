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
        className="clientsWrapper"
        style={{
          height: "auto",
          position: "relative",
          marginBottom: '40px'
        }}
      >
        <div
          className="clientsData"
          style={{
            padding: "15px",
            width: "550px",
            display: "flex",
            flexDirection: "row",
            flexBasis: "50%",
            posistion: "fixed",
            borderRadius: "15px",
          }}
        >
          <div
            className="clientsBox"
            style={{
              width: "550px",
              marginBottom: "0px",
            }}
          >
            <div className="clientsParent">
              <ListItemButton>
                <ListItemIcon>
                  <DirectionsCarFilledIcon sx={{ color: "#1976d2" }} />
                </ListItemIcon>
                <ListItemText
                  primary={`Pojazd: ${repair.carBrand} | VIN: ${repair.carVin}`}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircle sx={{ color: "#1976d2" }} />
                </ListItemIcon>
                <ListItemText primary={`Klient: `} />
                <GetClientName clients={clients} repair={repair} />
              </ListItemButton>
            </div>
            <div className="clientsChild" sx={{}}>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <CarRepairIcon sx={{ color: "#1976d2" }} />
                </ListItemIcon>
                <ListItemText primary="Zlecone usługi:" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  sx={{
                    zIndex: "2",
                  }}
                  component="div"
                  disablePadding
                  height="content-height"
                >
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
            </div>
            <SubmitPricing getRepairs={getRepairs} repair={repair} />
            <RejectPricing getRepairs={getRepairs} repair={repair} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MapRepairs;
