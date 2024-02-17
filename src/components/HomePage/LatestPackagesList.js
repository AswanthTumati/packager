// LatestPackagesList.js
import React, { useState, useEffect } from 'react';
import api from '../Services/Api.js'
import PackageDetails from '../PackageDetails.js';

const LatestPackagesList = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await api.get('/packages');
        const sortedPackages = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(sortedPackages)
        setPackages(sortedPackages.slice(0, 10));
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const handlePackageClick = (packageId) => {
    const clickedPackage = packages.find((pkg) => pkg.id === packageId);
    setSelectedPackage(clickedPackage);
  };

  return (
    <div className="latest-packages">
      <div className="packages-list">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`package-item ${selectedPackage && selectedPackage.id === pkg.id ? 'selected' : ''}`}
            onClick={() => handlePackageClick(pkg.id)}
          >
            <p>{pkg.name}</p>
            <p>{pkg.headline}</p>
          </div>
        ))}
      </div>
      <PackageDetails selectedPackage={selectedPackage} />
    </div>
  );
};

export default LatestPackagesList;
