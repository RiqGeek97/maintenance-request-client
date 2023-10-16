import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as maintenanceRequestService from '../services/RequestService';

import {useNavigate } from "react-router-dom";

const theme = createTheme();

export const Update = () => {
const navigate = useNavigate();
const {id} = useParams();
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [aptNumber, setAptNumber] = useState('');
const [description, setDescription] = useState('');
const [createdAt, setCreatedAt] = useState('');

useEffect(()=> {
    maintenanceRequestService.getById(id)
    .then(response => {
        const user = response.data;
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setDescription(user.description);
        setAptNumber(user.aptNumber);
        setCreatedAt(user.createdAt);
    })
},[]);

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const maintenanceRequest = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email:data.get('email'),
        aptNumber:data.get('aptNumber')
        description:data.get('description'),
        createdAt:data.get('createdAt')
    };

    maintenanceRequestService.updateMaintenanceRequest(id,maintenanceRequest)
    .then(response => {
        navigate("/");
    })

};

    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
            Update
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={firstName}
                    onChange= {(e) => setFirstName(e.target.value)}
                    id="firstName"
                    label="First Name"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    value={lastName}
                    onChange= {(e) => setLastName(e.target.value)}
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="aptNumber"
                    value={aptNumber}
                    onChange= {(e) => setAptNumber(e.target.value)}
                    label="Apartment Number"
                    name="Apartment Number"
                    autoComplete="Apartment Number"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="description"
                    value={description}
                    onChange= {(e) => setDescription(e.target.value)}
                    label="Description"
                    name="Description"
                    autoComplete="Description"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="createdAt"
                    value={createdAt}
                    onChange= {(e) => setCreatedAt(e.target.value)}
                    label="CreatedAt"
                    name="CreatedAt"
                    autoComplete="CreatedAt"
                />
                </Grid>

            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Save
            </Button>

            </Box>
        </Box>
        </Container>
    </ThemeProvider>
    )
};