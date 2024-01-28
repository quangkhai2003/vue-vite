<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define a reactive variable to store the API response
const responseData = ref('');

// Define the API endpoint
const apiUrl = 'https://shop-guitar.onrender.com/app/products/';

// Make the API call when the component is mounted
onMounted(async () => {
  try {
    // Make the GET request using Axios
    const response = await axios.get(apiUrl);

    // Update the responseData variable with the response data
    responseData.value = response.data;
    console.log('response data: ', response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
