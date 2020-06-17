import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, games, wins, losses, winrate) {
    return { name, games, wins, losses, winrate, };
}

// const rows = [
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const StatsTable = (data) => {
    const classes = useStyles();
    console.log('data', data)
    console.log('data.hamster', data.hamster)
    console.log('data.topfive', data.hamster)

    const rows = [
        createData(data.name, data.games, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('test', 356, 16.0, 49, 3.9),
    ];


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Games</TableCell>
                        <TableCell align="right">Wins</TableCell>
                        <TableCell align="right">Losses</TableCell>
                        <TableCell align="right">Winrate</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.games}</TableCell>
                            <TableCell align="right">{row.wins}</TableCell>
                            <TableCell align="right">{row.losses}</TableCell>
                            <TableCell align="right">{row.winrate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StatsTable;