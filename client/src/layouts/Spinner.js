import React from 'react';

import SpinnerGIF from './spinner.gif';

const Spinner = () => {
  return (
    <img
      style={{
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        width: '200px'
      }}
      src={SpinnerGIF}
      alt=''
    />
  );
};

export default Spinner;
