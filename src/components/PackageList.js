import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPackages, selectPackage } from './store/packagesSlice';
import { Result} from 'antd';
import { SmileOutlined} from '@ant-design/icons';

const PackageList = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages.packages);
  const searchTerm = useSelector((state) => state.searchTerm);
  const selectedPackage = useSelector((state) => state.packages.selectedPackage);

  React.useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  const handlePackageSelect = (selectedPackage) => {
    dispatch(selectPackage(selectedPackage));
  };

  const renderHeader = () => {
    if (searchTerm && packages.length > 0) {
      return (
        <h2>{packages.length} search results: {searchTerm}</h2>
      );
    } else if (searchTerm && packages.length === 0) {
      return (
        <Result
          icon={<SmileOutlined />}
          title={`No results found for: ${searchTerm}`}
        />
      );
    } else {
      return (
        <h2>Last 10 Packages</h2>
      );
    }
  };

  return (
    <div className="package-list">
      {renderHeader()}
      <div className="package-list-container">
        {packages.map((pack) => (
          <div
            key={pack.id}
            className={`package-item ${selectedPackage && selectedPackage.id === pack.id ? 'selected' : ''}`}
            onClick={() => handlePackageSelect(pack)}
          >
            <strong>{pack.name}</strong>
            <p>{pack.headline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
