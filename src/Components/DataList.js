import { TableCell, TableRow } from '@mui/material';
import { ChartDat } from "./ChartData.js";
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Moment from 'moment';
import Paper from '@mui/material/Paper';

class DataList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: {},
            label: {},
            datasets: [],
            
        };
       
    }

   
    componentDidMount() {
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data,
                    label: Object.keys(this.state.users).map((key1) => (
                        Object.keys(this.state.users[key1 = "Weekly Time Series"]).map((ckey) => (
                            Object.keys(this.state.users[key1 = "Weekly Time Series"][ckey]).map((lkey) => (
                                this.state.users[key1][ckey][lkey]
                            ))
                        ))
                    )),
                    //datasets:data["Weekly Time Series"].map((value) => value.date)
                })

            });
        const expdata ={
            labels: this.state.label,
            datasets: [
                {
                    label: 'Dataset1',
                    data: Object.keys(this.state.users).map((key1) => (
                        Object.keys(this.state.users[key1="Weekly Time Series"]).map((ckey) => (
                            Object.keys(this.state.users[key1 = "Weekly Time Series"][ckey]).map((lkey) => (
                               this.state.users[key1][ckey][lkey]
                            ))
                        ))
                    )),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',

                },
            ],
           

        };
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Chart.js Line Chart"
                }
            }
        };


       
    }
    
    

    render() {
        //console.log(this.state.users);

        return (
           
  
            <div>
                <div></div>
                <TableContainer sx={{ margin: 10 }} component={Paper}>

                    <Paper elevation={3} />
                    <Table sx={{ width: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Open</TableCell>
                                <TableCell>High</TableCell>
                                    <TableCell>Low</TableCell>
                                    <TableCell>Closed</TableCell>
                                    <TableCell>Volume</TableCell>
                                
                            </TableRow>
                        </TableHead>
                    </Table>
                    </TableContainer>
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
                               {Object.keys(this.state.users).map((key1) => (
                                   <div>
                                       {Object.keys(this.state.users[key1 = "Weekly Time Series"]).map((ckey) => (
                                           <TableRow>
                                               <TableCell>{Moment(ckey).format('DD/MM/YYYY')} </TableCell>
                                               {Object.keys(this.state.users[key1][ckey]).map((lkey) => (
                                                   <TableCell>
                                                       {this.state.users[key1][ckey][lkey]}
                                                   </TableCell>



                                               ))}
                                           </TableRow>
                                       ))}

                                   </div>

                               ))}

                           </TableBody>

                       </Table>
                   </TableContainer>
       
               </div>
           
        
       );
   }


}

export default DataList;

