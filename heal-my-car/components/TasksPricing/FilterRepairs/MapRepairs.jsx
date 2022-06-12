import RejectPricing from "../RejectPricing";
import SubmitPricing from "../SubmitPricing";
import MapSingleRepair from "./MapSingleRepair";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

const MapRepairs = ({
  getRepairs,
  repair,
  setEnabledEdits,
  enabledEdits,
  updateTaskPrice,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DirectionsCarFilledIcon />
        </ListItemIcon>
        <ListItemText primary={`Pojazd: ${repair.carBrand} | VIN: ${repair.carVin}`} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary={`Klient: ${repair.clientId}`} />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CarRepairIcon />
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
    </>
  );
};
export default MapRepairs;
