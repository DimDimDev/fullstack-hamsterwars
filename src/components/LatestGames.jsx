import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Components.css'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: 500
    },
    table: {
        minWidth: 300,
    },
});

const LatestGame = () => {
    const url = 'api/games/latest';
    const [data, setData] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, [])

    return (
        <div className="LatestGame"> {data ? <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Hamster 1</TableCell>
                        <TableCell align="right">Hamster 2</TableCell>
                        <TableCell align="right">Winner</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.timeStamp}>
                            <TableCell component="th" scope="row">
                                {row.timeStamp}
                            </TableCell>
                            <TableCell align="right">{row.contestantOne.name}</TableCell>
                            <TableCell align="right">{row.contestantTwo.name}</TableCell>
                            <TableCell align="right">{row.winner.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer> : 'no data'}
        </div>
    );
}

export default LatestGame;