import React from 'react'
import { Outlet } from 'react-router-dom'

import Repairstatus from "../components/Repairstatus";


export default function ClientPanel() {
    return (<>
        <div>ClientPanel</div>
        <Repairstatus />
        <Outlet />
    </>
    )
}
