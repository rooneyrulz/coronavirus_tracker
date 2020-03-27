import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// MATERIAL COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  tableRow: {
    cursor: 'pointer'
  }
});

const DataTableRow = ({ row, history }) => {
  const classes = useStyles();

  // useEffect(() => console.log(row), []);

  // const onClick = e => history.push('/somewhere');

  return (
    <TableRow hover className={classes.tableRow}>
      <TableCell component='th' scope='row'>
        {row.state}
      </TableCell>
      <TableCell align='center'>{row.country}</TableCell>
      <TableCell align='center'>{row.cases}</TableCell>
      <TableCell align='center'>{row.changes}</TableCell>
    </TableRow>
  );
};

export default withRouter(DataTableRow);
