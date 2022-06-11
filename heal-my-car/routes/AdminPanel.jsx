import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Repairstatus from '../components/Repairstatus';
import { StyledAdminPanelWrapper } from '../src/styled/StyledAdminPanelWrapper'
import { ClientsList } from '../components/ClientsList';
import { ClientSearch } from '../components/ClientSearch';

export default function AdminPanel() {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center' }}>AdminPanel</div>
            <br />
            <StyledAdminPanelWrapper>
                <div className='side-menu'>
                    <Stack direction="column" spacing={1}>
                        <Button variant="contained" href="#repairstatus">
                            Naprawy w toku
                        </Button>
                        <Button variant="contained" href="#logout">
                            Wyloguj
                        </Button>
                    </Stack>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className='content'>
                    <Repairstatus />
                    <br />
                    <ClientSearch />
                    <br />
                    <ClientsList />
                </div>
            </StyledAdminPanelWrapper>
            <Outlet />
        </>
    )
}
