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

function EmployeeTable(props) {
  const classes = useStyles();

 
  return (

    // Table Header
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Table Of Employees">
        <TableHead>
          <TableRow>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">D.O.B</TableCell>
          </TableRow>
        </TableHead>
    
        <TableBody>
          {props.sort.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
                </TableCell>

            <TableCell><div className="img-container"><img alt={props.name} src={props.image} /></div>
            <TableCell align="right">{props.name}</TableCell>
            <TableCell align="right">{props.position}</TableCell>
            <TableCell align="right">{props.email}</TableCell>
            <TableCell align="right">{props.phone}</TableCell>
            <TableCell align="right">{props.dob}</TableCell>
            </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeTable;
