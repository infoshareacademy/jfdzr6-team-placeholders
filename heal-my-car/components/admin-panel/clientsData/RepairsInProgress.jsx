import { collection, getDocs, where, query, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../src/firebase'
import { MapClients } from './MapClients'
import { MapRepairsInProgress } from './MapRepairsInProgress'

export const RepairsInProgress = () => {
  const [repairs, setRepairs] = useState([])
  const [clients, setClients] = useState([])

  const getRepairs = () => {
    const repairsCollection = collection(db, 'repairs')
    const pendingRepairsQuery = query(
      repairsCollection,
      where('isAccepted', '==', true),
      where('isDone', '==', false),
    )

    getDocs(pendingRepairsQuery).then(QuerySnapshot => {
      setRepairs(QuerySnapshot.docs.map(doc => ({ ...doc.data() })))
    })
  }

  const getClients = async () => {
    const clientsCollection = collection(db, 'clients')
    const pendingClientsQuery = query(clientsCollection)

    const clientsQuerySnapshot = await getDocs(pendingClientsQuery)
    const clientsDataPromises = clientsQuerySnapshot.docs.map(async doc => {
      const { clientRepairs, ...clientData } = doc.data()
      const clientRepairsData = await Promise.all(
        clientRepairs.map(async repair => {
          const repairData = await getDoc(repair)
          return repairData.data()
        }),
      )
      return { ...clientData, clientRepairs: clientRepairsData, id: doc.id }
    })
    const clientsData = await Promise.all(clientsDataPromises)
    setClients(clientsData)
    console.log(clientsData)
  }
  useEffect(() => {
    getRepairs()
    getClients()
  }, [])

  // console.log("rep", repairs);
  // console.log("clie", clients);
  return (
    <>
      <MapRepairsInProgress repairs={repairs} clients={clients} />
    </>
  )
}
