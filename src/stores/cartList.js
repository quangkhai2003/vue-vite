// Import Pinia and create the store
import { defineStore } from 'pinia';

// Define the product store
export const useProductStore = defineStore({
  // Unique identifier of the store
  id: 'product',

  // Define the state of the store
  state: () => ({
    productList: [],
  }),

  // Define actions to interact with the state
  actions: {
    // Set the product list
    setProductList(products) {
      this.productList = products;
    },
  },

  // Define getters to access the state
  getters: {
    // Get the total number of products in the list
    totalProducts() {
      return this.productList.length;
    },
  }
});
