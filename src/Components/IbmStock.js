import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TableCell, TableRow } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Moment from 'moment';
import Paper from '@mui/material/Paper';
import { Line } from 'react-chartjs-2';
import Switch from '@mui/material/Switch';


class IbmStock extends React.Component {
        state = {
            stockData: [],
            checked: false,

    };

   
    componentDidMount() {
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo')
            .then(res => res.json())
            .then((data) => {
                // destructing the data
                const { 'Weekly Time Series': weekValue } = data;
              
                // mapping the data for key value pair
                const newHistoryStats = Object.entries(weekValue).map(pair => pair);
                console.log(newHistoryStats);
                this.setState({ stockData: newHistoryStats })
                

            })
            .catch(console.log)
    }
   


    render() {
        //extracting the data
        const { stockData } = this.state.stockData;
        
        

        return (
            <div>
               
                <h1>The Stock Value of IBM.</h1>
                
                <Line
                    datasetIdKey='id'
                    data={{
                        labels: stockData.map(test => (test[0])), //loading the labels in api after extracting.
                        datasets: [
                            {
                                id: 1,
                                label: 'Open Value',
                                data: stockData.map(test => (test[1]["1. open"])),
                                backgroundColor: 'rgba(75,192,192,1)',
                                updateMode: "hide",
                                borderWidth: 2,
                                fill: false,
                                lineTension: 0.5
                            },
                            {
                                id: 2,
                                label: 'High Value',
                                data: stockData.map(test => (test[1]["2. high"])),
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                borderWidth: 2,
                                fill: false,
                                lineTension: 0.5
                            },
                            {
                                id: 3,
                                label: 'Low Value',
                                data: stockData.map(test => (test[1]["3. low"])),
                                backgroundColor: '#028A0f',
                               
                                borderWidth: 2,
                                fill: false,
                                lineTension: 0.5
                            },
                            {
                                id: 4,
                                label: 'Close Value',
                                data: stockData.map(test => (test[1]["4. close"])),
                                backgroundColor: '#fbb117',
                               
                                borderWidth: 2,
                                fill: false,
                                lineTension: 0.5
                            },
                           
                        ],
                    }}
                />
                <Line
                    datasetIdKey='id'
                    data={{
                        labels: stockData.map(test => (test[0])),
                        datasets: [
                            {
                                id: 5,
                                label: 'Volume',
                                data: stockData.map(test => (test[1]["5. volume"])),
                                backgroundColor: '#1520a6',
                                borderColor: '#1520a6',
                                borderWidth: 2,
                                fill: false,
                                lineTension: 0.5
                            },
                           
                        ],
                    }}
                />
            <h1>The tabular data </h1>
             
                <TableContainer sx={{margin: 5}} component={Paper}>

                       <Paper elevation={3} />
                       <Table sx={{ width: 300 }} aria-label="simple table">
                        <TableRow>
                            <TableCell>Date</TableCell>

                            <TableCell>Open</TableCell>
                            <TableCell>High</TableCell>
                            <TableCell>Low</TableCell>
                            <TableCell>Closed</TableCell>
                            <TableCell>Volume</TableCell>

                        </TableRow>
                           <TableBody>
                             
                                   <div>
                                       
                                <TableRow>
                                    {stockData.map(test => (<div><TableCell>{Moment(test[0]).format('DD/MM/YYYY')}</TableCell>
                                        <TableCell>{test[1]["1. open"]}</TableCell>
                                        <TableCell>{test[1]["2. high"]}</TableCell>
                                        <TableCell>{test[1]["3. low"]}</TableCell>
                                        <TableCell>{test[1]["4. close"]}</TableCell>
                                        <TableCell>{test[1]["5. volume"]}</TableCell>
                                    </div>))}
                                      


                                           </TableRow>



                                   </div>

                      

                           </TableBody>

                       </Table>
                </TableContainer>
                </div>
        )
    }

}

export default IbmStock;
