import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/firebase';
import { MapClients } from './MapClients';
import { MapRepairsInProgress } from './MapRepairsInProgress';

export const RepairsInProgress = () => {
    const [repairs, setRepairs] = useState([]);
    const [clients, setClients] = useState([]);

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


    const getClients = () => {
        const clientsCollection = collection(db, 'clients');
        const pendingClientsQuery = query(clientsCollection);

        getDocs(pendingClientsQuery).then((QuerySnapshot) => {
            setClients(QuerySnapshot.docs.map((doc) => ({ ...doc.data() }))
            )
        });
    };
    useEffect(() => {
        getRepairs();
        getClients();
    }, []);


    console.log('rep', repairs);
    console.log('clie', clients);
    return (
        <>
            <MapRepairsInProgress repairs={repairs} clients={clients} />

        </>
    )
}
