import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
export const TableView = ({ name, age, phone, classes, translate }) => {
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" className={classes.th}>
                            {name}
                        </TableCell>
                        <TableCell>{age} {translate ? 'Лет' : 'Years old'}</TableCell>
                        <TableCell align="right">{phone}</TableCell>
                        <TableCell align="right"><Icon className="star-icon">star</Icon></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
