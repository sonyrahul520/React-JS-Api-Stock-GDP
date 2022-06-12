import React, { useState, useEffect } from 'react';
import { ChartDat } from "./ChartData.js";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Moment from 'moment';

const StockVal = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stockData, setData] = useState([]);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result.data);
                    setChartData({
                        labels: Object.keys(result.data || {}).forEach((key1) => (
                            Object.keys(result.data[key1="Weekly Time Series"]).forEach((ckey) => (
                                //
                                result.data[key1][ckey]
                                //ckey
                            ))
                            )),
                        datasets: [
                            {
                                label: "Price in Dollars",
                                data: Object.keys(result).map((key1) => (
                                    Object.keys(result[key1="Weekly Time Series"]).map((ckey) => (
                                    Object.keys(result[key1="Weekly Time Series"][ckey]).map((lkey) => (
                                       // result[key1][ckey][lkey]
                                        lkey
                                        ))
                                    ))
                            )),
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
        
        return (
           
            <div>
               
                <h3>The Stock Value</h3>
                <div><ChartDat chartData={chartData} /></div>
               

            </div>
            );
    }
}

export default StockVal;