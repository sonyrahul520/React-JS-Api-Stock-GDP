import React, { useState, useEffect } from 'react';
import { ChartDat } from "./ChartData.js";
import { getDatasetAtEvent } from 'react-chartjs-2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Moment from 'moment';


const DataVal = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stockData, setData] = useState([]);
    const [chartData, setChartData] = useState({});

    function changeBackground(e) {
        e.target.backgroundColor = "red";
    }

    useEffect(() => {
        fetch("https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result.data);
                    setChartData({
                        labels: result.data.map((value) => value.date),   //the label of graph is obtained from the date 
                        datasets: [
                            {
                                label: "Price in Dollars",
                                data: result.data.map((value) => value.value),
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 2,
                                fill: false,
                                lineTension: 0.5
                            }
                        ]
                    });
                },
                (error) => {
                   setIsLoaded(true);
                    setError(error);
                }
              
        )
      

    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }


    else {
        <div>
            <ul>
                {
                    stockData.map(value => (
                        <div key={value.data}> {value.date}</div>
                        
                    ))
                }
            </ul>

            </div>
       return (
           
             //the data from api is rendered to the table
             //the Moment library is used for rendering the date in ('DD/MM/YYYY') form
           
           
           <div>
               <h3>The economic indicator of GDP</h3>
               <div><ChartDat chartData={chartData} /></div>

               <TableContainer sx={{ margin: 10 }} component={Paper}>

                   <Paper elevation={3} />
                   <Table sx={{
                       width: 300, "& .MuiTableRow-root:hover": {
                           
                       }

                   }} aria-label="simple table">
                       <TableHead>
                           <TableRow>
                               <TableCell align="right"><b> Date</b></TableCell>
                               <TableCell align="right"><b>Price In Dollars</b> </TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           {stockData.map(value => (
                               <TableRow key={value.data}> <TableCell align="right">{Moment(value.date).format('DD/MM/YYYY')}</TableCell>
                                   <TableCell align="right">{value.value}</TableCell>
                               </TableRow>))}
                       </TableBody>
                   </Table>
               </TableContainer>
           </div>);
    }
}

export default DataVal;
