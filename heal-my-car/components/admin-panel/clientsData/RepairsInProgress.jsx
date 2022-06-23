import { Accordion, AccordionSummary, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/firebase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import Checkbox from '@mui/material/Checkbox';
import MapSingleOffer from '../../../components/AcceptPricing/FilterOffer/MapSingleOffer';
import { MapClients } from './MapClients';

export const RepairsInProgress = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [repairs, setRepairs] = useState([]);

  const getRepairs = () => {
        const repairsCollection = collection(db, 'repairs');
        const pendingRepairsQuery = query(
            repairsCollection,
            where('isAccepted', '==', true),
            where('isDone', '==', false)
        );

        getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
            setRepairs(QuerySnapshot.docs.map((doc) => ({ ...doc.data() }))
            )
        });
    };
    useEffect(() => {
        getRepairs();
    }, []);
    const getSingleRepair =
        repairs.map((repair, index) => {
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
                            <ListItemText key={index} primary={<MapClients />} secondary={`Marka: ${repair.carBrand} - nr VIN: ${repair.carVin}`} />
                        </ListItemButton>
                    </AccordionSummary>
                    {repair.tasks.map((task, index, price) => (
                        <div key={index} style={{ display: 'flex' }}>
                            <MapSingleOffer
                                task={task}
                                repair={repair}
                                price={price}
                                index={index}
                            />
                            <Checkbox {...label} />
                        </div>
                    ))
                    }
                </Accordion >
            )
        })
    return (
        getSingleRepair
    )
}