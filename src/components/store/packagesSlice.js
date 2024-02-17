import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../Services/apiService';

export const fetchPackages = createAsyncThunk('packages/fetchPackages', async () => {
  try {
    const packages = await apiService.fetchPackages();
    return packages;
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
});

const packagesSlice = createSlice({
  name: 'packages',
  initialState: {
    allPackages: [], 
    packages: [],    
    selectedPackage: null,
  },
  reducers: {
    selectPackage: (state, action) => {
      state.selectedPackage = action.payload;
    },
    setSearchResults: (state, action) => {
      state.packages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.allPackages = action.payload;
        state.packages = action.payload.slice(0, 10); 
      });
  },
});

export const { selectPackage, setSearchResults } = packagesSlice.actions;
export const selectAllPackages = (state) => state.packages.packages;
export default packagesSlice.reducer;
