import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ClientPanel() {
    return (<>
        <div>ClientPanel</div>
        <Outlet />
    </>
    )
}
