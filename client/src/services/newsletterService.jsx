import axios from 'axios';

const API_URL = 'http://localhost:5000/api/newsletter';

export const subscribeNewsletter = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/subscribe`, { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Subscription failed');
  }
};
