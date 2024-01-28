<template>
  <div class="container mx-auto my-8">
    <h2 class="text-2xl font-semibold mb-4">Shopping Cart</h2>

    <div v-if="resultCart.length === 0" class="text-gray-600">
      Your cart is empty.
    </div>

    <div v-else>
      <div
        v-for="item in resultCart"
        :key="item.id"
        class="flex items-center justify-between border-b border-gray-300 py-2"
      >
        <div>
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
        <div class="flex items-center">
          <span class="mr-4">Quantity: {{ item.quantity }}</span>
          <button
            @click="removeItem(item.id)"
            class="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded"
      @click="checkout"
    >
      Check out
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { useDataListStore } from "../stores/dataList"; // Import the Pinia store
import CheckOut from "./CheckOut.vue";

// Define a reactive variable to store the API response
const responseData = ref("");

// Define the API endpoint

const resultCart = ref([]);
const dataListStore = useDataListStore();
const router = useRouter()
// product_list= ref([])

function getListData(cartItems, dataList) {
  const result = [];
  cartItems.forEach((cartItem) => {
    console.log(cartItem);
    const product = dataList.find((item) => item.id == cartItem.product_id);
    console.log("product", product);
    if (product) {
      result.push({ ...product, quantity: cartItem.quantity });
    }
    console.log("Result: ", result);
  });
  resultCart.value = [...result];
}

onMounted(async () => {
  console.log("mounted");
  try {
    const response = await axios.get(
      "https://shop-guitar.onrender.com/app/cart_items/"
    );
    console.log("response data: ", response.data.cart_items);
    //   cartItems.value = response.data.cart_items;
    //   product_list.value = getListData(response.data.cart_items, dataListStore)
    //   result = getListData(response.data.cart_items, dataListStore.dataList)
    getListData(response.data.cart_items, dataListStore.dataList);
    console.log("resultCart.value", resultCart.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const checkout = () => {
    router.push({name: "CheckOut"});
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
