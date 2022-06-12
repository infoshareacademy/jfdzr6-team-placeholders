import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export const AdminSideMenu = () => {
    return (
        <>
            <div className='side-menu' style={{ width: '140px', height: '100%' }}>
                <Stack direction="column" spacing={1} marginTop='15px'>
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
                    <Link to='/login' style={{ textDecoration: 'none', alignSelf: 'center' }}>
                        <Button variant="contained">
                            Wyloguj
                        </Button>
                    </Link>
                </Stack>
            </div>
        </>
    )
}