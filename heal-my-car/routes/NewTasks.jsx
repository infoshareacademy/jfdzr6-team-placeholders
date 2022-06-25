import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TasksPricing from '../components/TasksPricing/TasksPricing'
import { AdminSideMenu } from '../components/menu/AdminSideMenu';

const NewTasks = () => {
    return (
        <>
            <Navbar />
            <div
                style={{ textAlign: 'center' }}>
                <h2>Panel Admina</h2>
            </div>
            <br />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                <AdminSideMenu />
                <Divider orientation="vertical" variant="middle" flexItem style={{ margin: '0 20px 0 20px' }} />
                <TasksPricing />
            </div>

            <Outlet />
        </>
    )
}

export default NewTasks