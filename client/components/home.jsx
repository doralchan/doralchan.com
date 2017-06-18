import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return(
     <div>
        <ul>
          <li><Link to='link-projects'>Projects</Link></li>
          <li><Link to='link-about'>About</Link></li>
        </ul>
     </div>
    );
  }
}

export default Home
