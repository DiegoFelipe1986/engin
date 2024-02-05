// apiService.js
import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/api';

const ApiService = {
  getAllBooks: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/books`);
      return response.data;
    } catch (error) {
      console.error('Error getting books:', error);
      throw error;
    }
  },

  addBook: async (newBook) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/books`, newBook);
      return response.data;
    } catch (error) {
      console.error('Error getting book:', error);
      throw error;
    }
  },
};

export default ApiService;
