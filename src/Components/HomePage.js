import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

import DataVal from './Data.js';
import IbmStock from './IbmStock.js';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        
    </Box>
);



function HomePage() {
    
    //With the react-router-dom the navigation links to different page is created.
    
    
    return (
        <div>
        <Card sx={{ minWidth: 500,  margin: '20px' }}>
            <CardContent>
                <Typography variant="h3" color="text.primary" gutterBottom>
                    Stock and GDP Value
                </Typography>
                <Typography variant="h5" component="div">
                    
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   
                </Typography>
                <Typography variant="body2">
                   
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"></Button>
            </CardActions>
            </Card>

            <div margin="10px" align="left"> 
                <Card sx={{ minWidth: 800, margin: '20px' }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" gutterBottom>
                            The Economic Indicator of GDP
                        </Typography>
                        <Typography variant="h5" component="div">
                            
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                        </Typography>
                        <Typography variant="body2">

                        </Typography>
                      
                        <Button><Link to={'DataVal'}>Open GDP Data</Link></Button>
                       <Routes>

                                <Route path='/DataVal' element={<DataVal/>} />
                        </Routes>
                  
                       
                    </CardContent>
                    <CardActions>
                        <Button size="small"></Button>
                    </CardActions>
                </Card>            </div>
            <div margin="10px" align="left">
                <Card sx={{ minWidth: 800, margin: '20px' }}>
                    <CardContent>
                        <Typography variant="h5" color="text.primary" gutterBottom>
                            The Stock Value of IBM
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                        </Typography>
                        <Typography variant="body2">

                        </Typography>

                        
                        <Button><Link to={'IbmStock'}>Open Stock Data</Link></Button>
                        <Routes>
                            <Route path='/IbmStock' element={<IbmStock />} />
                            
                        </Routes>


                    </CardContent>
                    <CardActions>
                        <Button size="small"></Button>
                    </CardActions>
                </Card>            </div>

           
        
            </div>
    );
    
}

export default HomePage;
