import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    page not existes. 404 - <Link to="/"> go home</Link>
  </div>
);

export default NotFoundPage;
