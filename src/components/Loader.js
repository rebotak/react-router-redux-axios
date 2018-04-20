import React from 'react';
import FontAwesome from 'react-fontawesome';

const Loader = () => (
      <span className="loader">
        <FontAwesome
          name='spinner'
          size='3x'
          spin
        />
      </span>
    )
export default Loader;
