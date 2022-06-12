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
import RejectOffer from "./RejectOffer";
import AcceptOffer from "./AcceptOffer";
import MapSingleOffer from "./MapSingleOffer";
const MapOffers = ({ repair, getRepairs }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {" "}
      <ListItemButton>
        <ListItemIcon>
          <DirectionsCarFilledIcon />
        </ListItemIcon>
        <ListItemText
          primary={`Pojazd: ${repair.carBrand} | VIN: ${repair.carVin}`}
          secondary={`Koszt całkowity zleconej usługi: ${repair.totalCost} zł`}
        />
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
            <MapSingleOffer
              key={index}
              task={task}
              repair={repair}
              index={index}
            />
          ))}
        </List>
      </Collapse>
      <AcceptOffer repair={repair} getRepairs={getRepairs} />
      <RejectOffer repair={repair} getRepairs={getRepairs} />
    </>
  );
};
export default MapOffers;
