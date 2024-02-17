import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { setSearchTerm } from './store/searchTermSlice';
import { setSearchResults } from './store/packagesSlice';

const { Search : SearchBox } = Input;

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const allPackages = useSelector((state) => state.packages.allPackages);

  const handleSearch = (value) => {
    const trimmedSearchTerm = value.trim();
    dispatch(setSearchTerm(trimmedSearchTerm));

    const filteredPackages = allPackages.filter(pack => {
      const searchTermLower = trimmedSearchTerm.toLowerCase();
      return pack.name.toLowerCase().includes(searchTermLower) || pack.headline.toLowerCase().includes(searchTermLower);
    });

    dispatch(setSearchResults(filteredPackages));
  };

  return (
    <SearchBox
      placeholder="Search packages"
      onSearch={handleSearch}
      enterButton={<SearchOutlined />}
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default Search;
