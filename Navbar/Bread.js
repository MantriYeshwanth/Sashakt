// Breadcrumbs.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './bread.css'; // Import your CSS file for styling

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
            {index > 0 && ' > '}
            {!isLast ? <Link to={routeTo}>{name}</Link> : name}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
