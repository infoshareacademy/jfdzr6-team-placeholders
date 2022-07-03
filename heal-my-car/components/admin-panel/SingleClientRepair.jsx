import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";

import React from "react";

export const SingleClientRepair = ({ repair, id }) => {
  {
    repair.tasks.map((task, index) => {
      return (
        <>
          <ListItemButton sx={{ pl: 10, maxHeight: "48px" }}>
            <ListItemIcon>
              <BuildIcon sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary={`${task.task}`} />
          </ListItemButton>
        </>
      );
    });
  }
};
