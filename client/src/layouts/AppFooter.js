import React from 'react';

// MATERIAL COMPOENTS
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const AppFooter = () => {
  return (
    <Container maxWidth='md'>
      <hr />
      <Typography
        align='center'
        variant='overline'
        display='block'
        gutterBottom
      >
        <strong>Coronavirus Tracker</strong> All Rights Reserved to Ruzny
      </Typography>
    </Container>
  );
};

export default AppFooter;
