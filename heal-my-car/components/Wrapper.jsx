import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Wrapper() {
    return (
        <>
            <div>Wrapper FORM</div>
            <Outlet />
        </>
    )
}
