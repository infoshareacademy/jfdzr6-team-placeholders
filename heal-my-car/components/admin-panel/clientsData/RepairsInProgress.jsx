import { async } from '@firebase/util';
import { Accordion, AccordionSummary, Collapse, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { collection, onSnapshot, doc, getDocs, where, DocumentReference, query, CollectionReference } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/firebase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const RepairsInProgress = () => {
    const [repairs, setRepairs] = useState([]);
    const [openRowIndex, setOpenRowIndex] = useState(null);
    const clientId = 1; //tutaj przypisać wartość JWT z informacją o id clienta

    useEffect(() => {
        getRepairs();
    }, []);

    const getRepairs = () => {
        const repairsCollection = collection(db, 'repairs');
        const pendingRepairsQuery = query(
            repairsCollection,
            where('clientId', '==', clientId)
        );

        getDocs(pendingRepairsQuery).then((QuerySnapshot) => {
            setRepairs(QuerySnapshot.docs.map((doc) => doc.data()));
        });
    };

    const handleCollapse = (index) => {
        if (openRowIndex === index) {
            setOpenRowIndex(null);
            return;
        }

        setOpenRowIndex(index);
    };

    return (
        <>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >

                {repairs.map((row, index) => (
                    < Typography > Marka: {row.carBrand} Numer VIN: {row.carVin}</Typography>
                ))}

            </AccordionSummary>



        </>
    )
};