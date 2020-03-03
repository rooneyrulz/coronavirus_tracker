import React from 'react';

// MATERIAL COMPONENTS
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const DataTableRow = ({ row }) => {
  return (
    <TableRow hover>
      <TableCell component='th' scope='row'>
        {row.state}
      </TableCell>
      <TableCell align='center'>{row.country}</TableCell>
      <TableCell align='center'>{row.cases}</TableCell>
      <TableCell align='center'>{row.changes}</TableCell>
    </TableRow>
  );
};

export default DataTableRow;
