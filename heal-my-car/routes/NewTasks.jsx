import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TasksPricing from '../components/TasksPricing/TasksPricing'

const NewTasks = () => {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center' }}>AdminPanel</div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='side-menu' style={{ width: '140px', height: '100%' }}>
                    <Stack direction="column" spacing={1}>
                        <Link to='/newtasks' style={{ textDecoration: 'none' }}>
                            <Button variant="contained">
                                Naprawy do wyceny
                            </Button>
                        </Link>
                        <Link to='/admin-panel' style={{ textDecoration: 'none' }}>
                            <Button variant="contained">
                                Naprawy w toku
                            </Button>
                        </Link>
                        <Button variant="contained">
                            Wyloguj
                        </Button>
                    </Stack>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem style={{ margin: '0 20px 0 20px' }} />
                <TasksPricing />
            </div>

            <Outlet />
        </>
    )
}

export default NewTasks