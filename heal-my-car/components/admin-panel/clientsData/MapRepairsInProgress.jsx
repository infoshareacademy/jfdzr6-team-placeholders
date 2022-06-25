import { Accordion, AccordionSummary, Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import BuildIcon from "@mui/icons-material/Build";
import { MapClients } from "./MapClients";
import { Fragment } from "react";
export const MapRepairsInProgress = ({ repairs, clients }) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return <>

        {repairs.map((repair, index, id, clientId) => {
            return (
                <>
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <DirectionsCarFilledIcon />
                                </ListItemIcon>
                                <MapClients clients={clients} />
                                <ListItemText secondary={`Marka: ${repair.carBrand} - nr VIN: ${repair.carVin}`} />
                            </ListItemButton>
                        </AccordionSummary>
                        {repair.tasks.map((task, index) => (
                            <div key={index} style={{ display: 'flex' }}>
                                <ListItemButton sx={{ pl: 10, maxHeight: "48px" }}>
                                    <ListItemIcon>
                                        <BuildIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={task.task} secondary={`${task.price} zł`} />
                                </ListItemButton>
                                <Checkbox {...label} />
                            </div>
                        ))
                        }
                    </Accordion >
                </>
            )
        })}
    </>
}