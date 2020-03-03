import React from 'react';

// MATERIAL COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// COMPONENTS
import DataTableRow from './DataTableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const DataTable = ({ data }) => {
  const classes = useStyles();

  const createData = (state, country, cases, changes) => {
    return { state, country, cases, changes };
  };

  const rows = data.map(row => {
    const totalCases = row[Object.keys(row)[Object.keys(row).length - 1]];
    const changes =
      Number(row[Object.keys(row)[Object.keys(row).length - 1]]) -
      Number(row[Object.keys(row)[Object.keys(row).length - 2]]);

    return createData(
      row['Province/State'],
      row['Country/Region'],
      totalCases,
      changes
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align='center'>Country</TableCell>
            <TableCell align='center'>Total Cases Reported</TableCell>
            <TableCell align='center'>Changes Since Last Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <DataTableRow row={row} key={key} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
