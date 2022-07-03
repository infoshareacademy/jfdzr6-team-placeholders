import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import BuildIcon from "@mui/icons-material/Build";
import { SingleClientRepair } from "./SingleClientRepair";

export const OpenTaskList = ({ repair, index, id }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {repair.tasks.map((task, index) => {
        return (
          <>
            <List
              sx={{
                justifyContent: "center",
                width: "80%",
                gap: "55px",
                margin: "0 auto",
              }}
              component="div"
              disablePadding
              height="content-height"
            >
              <ListItemButton sx={{ pl: 10, maxHeight: "48px" }}>
                <ListItemIcon>
                  <BuildIcon sx={{ color: "#1976d2" }} />
                </ListItemIcon>
                <ListItemText primary={`${task.task}`} />
              </ListItemButton>
            </List>
          </>
        );
      })}
    </>
  );
};
