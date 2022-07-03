import {
  Accordion,
  AccordionSummary,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { SendRepairDone } from "./SendRepairDone";
import { OpenTaskList } from "./OpenTasksList";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CollapseList } from "./CollapseList";
import Mechanic from "./Mechanic";

export const MapRepairsInProgress = ({ clients, getClients }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log("clients", clients);
  return (
    <>
      <div
        style={{
          height: "64px",
          width: "200%",
          color: "#fff",
        }}
      ></div>
      {clients
        .filter(({ clientRepairs }) => {
          return clientRepairs.some(({ isDone }) => !isDone);
        })
        .filter(({ clientRepairs }) => {
          return clientRepairs.some(({ totalCost }) => totalCost != null);
        })
        .map((client, index, id) => {
          return (
            <>
              <div
                className="clientsWrapper"
                style={{
                  height: "auto",
                  marginBottom: "100px",
                  alignContent: "center",

                  // maxHeight: "215px",
                }}
              >
                <div
                  className="clientsData"
                  style={{
                    marginTop: "20px",
                    paddingBottom: "10px",
                    display: "flex",
                    flexDirection: "column",
                    flexBasis: "50%",
                    alignContent: "center",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircle sx={{ color: "#1976d2" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Klient: ${client.name} ${client.lastName}`}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      paddingLeft: "10px",
                    }}
                  >
                    {client.clientRepairs
                      .filter(({ isDone }) => !isDone)
                      .filter(({ totalCost }) => totalCost != null)
                      .map((repair, index) => {
                        return (
                          <>
                            <div style={{ display: "flex" }}>
                              <ListItemIcon>
                                <DirectionsCarFilledIcon
                                  sx={{ color: "#1976d2" }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={`Pojazd: ${repair.carBrand} | VIN: ${repair.carVin}`}
                              />
                            </div>
                            <CollapseList
                              key={index}
                              repair={repair}
                              index={index}
                              id={id}
                              getClients={getClients}
                            />
                            <SendRepairDone
                              getClients={getClients}
                              id={repair.id}
                            />
                          </>
                        );
                      })}
                  </ListItemButton>

                  {/* <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <CarRepairIcon sx={{ color: "#1976d2" }} />
                  </ListItemIcon>
                  <ListItemText primary="Zlecone usługi:" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <OpenTaskList key={index} clients={clients} index={index} />
                  </List>
                </Collapse> */}
                </div>
              </div>
            </>
          );
        })}
      <Mechanic />
    </>
  );
};
