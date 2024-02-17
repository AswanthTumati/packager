import axios from 'axios';

const API_URL = 'https://600eda693bb1d100179e04dc.mockapi.io/api/v1/packages';

const fetchPackages = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
};

export default { fetchPackages };
