import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/firebase';

export const MapClients = () => {
    const [clients, setClients] = useState([]);
    const getClients = () => {
        const clientsCollection = collection(db, 'clients');
        const repairsCollection = collection(db, 'repairs');
        const clientsQuery = query(clientsCollection);

        getDocs(clientsQuery).then((QuerySnapshot) => {
            setClients(QuerySnapshot.docs.map((doc) => ({ ...doc.data() }))
            )
        });
    };
    useEffect(() => {
        getClients();
    }, []);
    console.log(clients);
    const clientData = clients.map((client, index) => {
        return (
            <p>{client.name} {client.lastName}</p>)
    });
    return (
        clientData
    )
}
