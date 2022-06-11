import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminPanel() {
    return (
        <>
            <div>AdminPanel</div>
            <Outlet />
        </>
    )
}
// import { AdminClientsList } from '../components/AdminClientsList'
// import { Navbar } from '../components/Navbar'
// import { Orders } from '../components/Orders'
// import SideMenu from '../components/SideMenu'
// export const AdminPanel = () => {
//     return (
//         <>
//             <Navbar />
//             <h2>Panel administracyjny</h2>
//             <SideMenu />
//             <Orders />
//             <AdminClientsList />