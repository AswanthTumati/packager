import React from 'react';
import PackageList from './PackageList';
import PackageDetails from './PackageDetails';

const Homepage = () => {
  return (
    <div className="homepage">
      <PackageList />
      <PackageDetails />
    </div>
  );
};

export default Homepage;
