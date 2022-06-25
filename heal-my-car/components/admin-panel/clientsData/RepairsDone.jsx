import {
  Accordion,
  AccordionSummary,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { collection, getDocs, where, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../src/firebase";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import BuildIcon from "@mui/icons-material/Build";
import { Navbar } from "../../Navbar";
import { Outlet } from "react-router-dom";
import { AdminSideMenu } from "../../Menu/AdminSideMenu";
import { MapClients } from "./MapClients";

export const RepairsDone = () => {
  const [repairs, setRepairs] = useState([]);
  const getRepairs = () => {
    const repairsCollection = collection(db, "repairs");
    const pendingRepairsQuery = query(
      repairsCollection,
      where("isAccepted", "==", true),
      where("isDone", "==", false)
    );

    getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
      setRepairs(QuerySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  };
  useEffect(() => {
    getRepairs();
  }, []);

  const getSingleRepair = repairs.map((repair, index) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          key={index}
        >
          <ListItemButton>
            <ListItemIcon>
              <DirectionsCarFilledIcon />
            </ListItemIcon>
            <ListItemText
              primary={`<MapClients clients={clients} /> ${(<MapClients />)}`}
            />
            <ListItemText
              secondary={`Marka: ${repair.carBrand} | VIN: ${repair.carVin}`}
            />
          </ListItemButton>
        </AccordionSummary>
        {repair.tasks.map((task, index) => (
          <div key={index} style={{ display: "flex" }}>
            <ListItemButton sx={{ pl: 10, maxHeight: "48px" }}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText
                primary={task.task}
                secondary={`${task.price} zł`}
              />
            </ListItemButton>
          </div>
        ))}
      </Accordion>
    );
  });

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Panel Admina</h2>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AdminSideMenu />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          style={{ margin: "0 20px 0 20px" }}
        />
        <div className="content">{getSingleRepair}</div>
      </div>

      <Outlet />
    </>
  );
};
