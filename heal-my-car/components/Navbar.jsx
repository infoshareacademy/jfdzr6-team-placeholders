import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav>
                <Box
                    component="img"
                    sx={{
                        height: 64,
                    }}
                    alt="Your logo."
                    src={"https://cdn.logo.com/hotlink-ok/logo-social.png"} />
                <Link to={'/'}>Home</Link>
            </nav>
        </>
    )
}
