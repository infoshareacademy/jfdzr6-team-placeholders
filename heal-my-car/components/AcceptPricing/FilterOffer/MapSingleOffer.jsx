import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BuildIcon from "@mui/icons-material/Build";

const MapSingleOffer = ({ task }) => {
  return (
    <>
      <ListItemButton sx={{ pl: 10, maxHeight: "48px" }}>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary={task.task} secondary={`${task.price} zł`} />
      </ListItemButton>
    </>
  );
};

export default MapSingleOffer;
