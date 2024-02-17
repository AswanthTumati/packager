import React from 'react';
import Search from './Search';
import { Space } from 'antd';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>packager</span>
      </div>
      <div className="right">
        <Space>
          <Search />
          
        </Space>
      </div>
    </div>
  );
};

export default Navbar;
