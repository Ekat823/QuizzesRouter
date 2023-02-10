import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
        <h2>404</h2>
        <p>The Page Does Not Exist</p>
        <Link to='/'>Back Home</Link>
    </div>
    
  )
}

export default Error