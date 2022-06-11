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
