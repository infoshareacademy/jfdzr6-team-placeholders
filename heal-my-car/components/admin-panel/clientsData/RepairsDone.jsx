import { Accordion, AccordionSummary, Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/firebase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import MapSingleOffer from '../../../components/AcceptPricing/FilterOffer/MapSingleOffer';
import { Navbar } from '../../Navbar';
import { Outlet } from 'react-router-dom';
import { AdminSideMenu } from '../../Menu/AdminSideMenu';

export const RepairsDone = () => {
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
                            <ListItemText key={index} primary={`Marka: ${repair.carBrand} | VIN: ${repair.carVin}`} />
                        </ListItemButton>
                    </AccordionSummary>
                    {repair.tasks.map((task, index) => (
                        <MapSingleOffer
                            task={task}
                            repair={repair}
                            index={index}
                        />
                    ))
                    }
                </Accordion >
            )
        })

    return (
        <>
            <Navbar />
            <div style={{ textAlign: "center" }}>
                <h2>Panel Admina</h2>
            </div>
            <br />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <AdminSideMenu />
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    style={{ margin: "0 20px 0 20px" }}
                />
                <div className="content">
                    {getSingleRepair}
                </div>
            </div>

            <Outlet />
        </>
    )
}