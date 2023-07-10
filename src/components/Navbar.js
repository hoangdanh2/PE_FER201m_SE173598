import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position='static' sx={{backgroundColor:"black", color:"green"}}>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontWeight:"bold"}}>
                    Staff Management
                </Typography>
                <Button sx={{fontWeight:"bold",fontSize:"18px"}} color='inherit' component={Link} to="/">Home</Button>
                <Button sx={{fontWeight:"bold",fontSize:"18px"}} color='inherit' component={Link} to="/dashboard">Dashboard</Button>
                <Button sx={{fontWeight:"bold",fontSize:"18px"}} color='inherit' component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;