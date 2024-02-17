import React from 'react';
import { useSelector } from 'react-redux';

const PackageDetails = () => {
  const selectedPackage = useSelector((state) => state.packages.selectedPackage);
  

  const formatList = (list) => {
    if (!list || list.length === 0) return '';
    
    return list.map((item) => (
      <span key={item}>{item}, </span>
    ));
  };

  return (
    <div className="package-details">
      {selectedPackage ? (
        <>
          <h2>Package Details</h2>
          <div>
            Name: {selectedPackage.name} <span>{selectedPackage.version}</span>
          </div>
          <div>
            License: {selectedPackage.license}
          </div>
          <div>
            Date: {selectedPackage.created_at}
          </div>
          <div>
            {selectedPackage.description}
          </div>
          <div>
            <strong>Dependency:</strong> <pre>{formatList(selectedPackage.dependencies)}</pre>
          </div>
          <div>
            <strong>Imports:</strong> <pre>{formatList(selectedPackage.imports)}</pre>
          </div>
          <div>
            <strong>Authors:</strong> <pre>{formatList(selectedPackage.authors)}</pre>
          </div>
        </>
      ) : ''
      }
    </div>
  );
};

export default PackageDetails;
