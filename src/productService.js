/** @format */

// import axios from 'axios';

// const API_URL = '   http://localhost:3000/products';
// console.log()
// const getProducts = () => {
//   return axios.get(API_URL);
// };

// export default {
//   getProducts,
// };
import axios from "axios";

const API_URL = "https://product-udgam-backend.onrender.com/products";

const getProducts = () => {
  return axios
    .get(API_URL)
    .then((response) => {
      // Log the response data
      // console.log("Data received:", response.data);
      return response.data;
    })
    .catch((error) => {
      // Log the error if there is one
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error if needed
    });
};

export default {
  getProducts,
};
