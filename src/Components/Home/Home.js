import React from 'react';
import Button from '@mui/material/Button';
import BasicGrid from '../Grid';
import { Container } from '@mui/system';
const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Button variant="contained">Mithila</Button>
            <Container maxWidth="sm">
                <BasicGrid />
            </Container>
        </div>
    );
};

export default Home;