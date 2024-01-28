<template>
  <div v-if="item" class="w-screen h-5/6 flex justify-center items-center">
    <!-- -------------------------- -->
    <div
      class="h-4/6 bg-white rounded-lg overflow-hidden flex justify-center items-center"
    >
      <div>
        <img
          class="w-[450px] h-4/6 object-cover object-center"
          src="https://vietthuong.vn/upload/content/images/tuvan/guitar/Fender-FA-115.jpg"
          alt="Card image"
        />
      </div>
      <div class="p-6">
        <h1 class="text-xl font-bold mb-2">{{ item.title }}</h1>
        <h1 class="text-xl font-bold mb-2">Price: {{ item.price }}</h1>
        <p class="text-gray-700 text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mattis nunc vitae ante aliquet, sed hendrerit ex blandit. Nam vitae
          malesuada felis, sit amet efficitur justo.
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="addToCart"
        >
          Add to cart
        </button>
      </div>
    </div>
    <!-- -------------------------- -->
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useDataListStore } from "../stores/dataList"; // Import the Pinia store
import axios from 'axios'

const route = useRoute();
const dataListStore = useDataListStore();

const item = ref(null);

// Fetch data from Pinia store when the component is mounted
onMounted(() => {
  fetchData();
});

// Watch for changes in the route parameter
watch(
  () => route.params.id,
  (newId, oldId) => {
    fetchData();
  }
);

// Function to fetch data from Pinia store
const fetchData = () => {
  const itemId = route.params.id;
  const dataItem = dataListStore.dataList.find((item) => item.id == itemId);
  if (dataItem) {
    item.value = dataItem;
  } else {
    console.error("Item not found");
  }
};

async function addToCart() {
  const url = "https://shop-guitar.onrender.com/app/add_to_cart/";
  const data = {
    product_id: item.value.id,
    quantity: 1,
  };

  try {
    const response = await axios.post(url, data);
    console.log("Response:", response.data);
    // Handle success
  } catch (error) {
    console.error("Error:", error);
    // Handle error
  }
}
</script>
