import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CarRepairIcon from "@mui/icons-material/CarRepair";

import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { OpenTaskList } from "./OpenTasksList";

export const CollapseList = ({ repair, index, id }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CarRepairIcon sx={{ color: "#1976d2" }} />
        </ListItemIcon>
        <ListItemText primary="Zlecone usługi:" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <List component="div" disablePadding> */}
        <OpenTaskList key={index} repair={repair} index={index} id={id} />
        {/* </List> */}
      </Collapse>
    </>
  );
};
