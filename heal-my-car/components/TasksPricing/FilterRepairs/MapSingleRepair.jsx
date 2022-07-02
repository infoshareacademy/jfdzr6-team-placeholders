import EditTasks from "./EditTasks";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BuildIcon from "@mui/icons-material/Build";

const MapSingleRepair = ({ task, index, updateTaskPrice, repair }) => {
  return (
    <>
      <ListItemButton sx={{ pl: 10, maxHeight: "48px" }}>
        <ListItemIcon>
          <BuildIcon sx={{ color: "#c43098" }} />
        </ListItemIcon>
        <ListItemText primary={task.task} />
        <EditTasks
          task={task}
          repair={repair}
          index={index}
          updateTaskPrice={updateTaskPrice}
        />
      </ListItemButton>
    </>
  );
};

export default MapSingleRepair;
