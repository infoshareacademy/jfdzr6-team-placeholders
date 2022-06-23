import { Accordion, AccordionDetails, AccordionSummary, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { Fragment, useEffect, useState } from 'react'
import { db } from '../../../src/firebase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";



export const RepairsInProgress = () => {

    const [repairs, setRepairs] = useState([]);
    console.log('repairs po useState');
    console.log(repairs);
    const getRepairs = () => {
        const repairsCollection = collection(db, 'repairs');
        const pendingRepairsQuery = query(
            repairsCollection,
            // where('clientId', '==', clientId),
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
        repairs.map(repair => {
            console.log(repair);
            return (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <DirectionsCarFilledIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Marka: ${repair.carBrand} | VIN: ${repair.carVin}`} />
                        </ListItemButton>
                    </AccordionSummary>
                    {/* <AccordionDetails>
                        {`cos ${repair.tasks.task}`}
                    </AccordionDetails> */}
                </Accordion>
            )
        })


    const getRepairDetails = () => {

    }

    return (
        <>
            {getSingleRepair}
            <getRepairDetails />
        </>
    )
}