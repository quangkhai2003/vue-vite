<template>
  <div class="container mx-auto my-8">
    <h2 class="text-2xl font-semibold mb-4">Checkout</h2>
     
        <div>
          <h3 class="text-lg font-semibold">total quantity: {{ checkoutData.totalQuantity }}</h3>
          <p class="text-lg font-semibold">total revenue: {{ checkoutData.totalRevenue }}</p>
        </div>
      </div>

    
</template>

<script setup>
// Checkout function
import { ref, onMounted } from "vue";
import axios from "axios";

const checkoutData = ref({})

onMounted(async () => {
  console.log("mounted");
  try {
    const response = await axios.post(
      "https://shop-guitar.onrender.com/app/checkout/"
    );
    console.log("response data: ", response.data);
    //   cartItems.value = response.data.cart_items;
    //   product_list.value = getListData(response.data.cart_items, dataListStore)
    //   result = getListData(response.data.cart_items, dataListStore.dataList)
    checkoutData.value = response.data
    console.log("checkoutData", checkoutData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
