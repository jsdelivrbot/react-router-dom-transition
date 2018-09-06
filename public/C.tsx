import * as React from 'react';
import { Link } from 'react-router-dom';

const C: React.SFC = () => (
  <div style={{ backgroundColor: 'lightblue' }}>
    <Link to="/">top</Link>
    <Link to="/a">a</Link>
    <Link to="/b">b</Link>
    <Link to="/c">c</Link>
    <p>c</p>
    <input type="checkbox" />
  </div>
);

export default C;