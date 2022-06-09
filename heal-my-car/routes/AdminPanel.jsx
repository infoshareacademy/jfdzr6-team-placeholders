import React from 'react'
import { AdminClientsList } from '../components/AdminClientsList'
import { Navbar } from '../components/Navbar'
import { Orders } from '../components/Orders'
import { SideMenu } from '../components/SideMenu'

export const AdminPanel = () => {
    return (
        <>
            <Navbar />
            <SideMenu />
            <h2>Panel administracyjny</h2>
            <Orders />
            <AdminClientsList />
        </>
    )
}
