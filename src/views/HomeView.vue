<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { useDataListStore } from "../stores/dataList"; // Import the Pinia store

// Define a reactive variable to store the API response
const responseData = ref("");

// Define the API endpoint
const apiUrl = "https://shop-guitar.onrender.com/app/products/";


const route = useRoute();
const router = useRouter();
const dataListStore = useDataListStore();
const dataref = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  console.log("mounted");
  if (dataListStore.dataList.length === 0) {
    try {
      const response = await axios.get(
        "https://shop-guitar.onrender.com/app/products/"
      );
      console.log("response data: ", response.data.products);
      dataListStore.setDataList(response.data.products); // Store the fetched data globally
      dataref.value = dataListStore.dataList;
      isLoading.value = false;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    dataref.value = dataListStore.dataList;
    isLoading.value = false;
  }
});

const goToDetail = (itemId) => {
  router.push({ name: "CardDetail", params: { id: itemId } });
};
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="flex flex-wrap justify-around items-center">
        <div
          v-for="item in dataref"
          :key="item.id"
          @click="goToDetail(item.id)"
        >
          <div class="w-60 h-96 rounded overflow-hidden shadow-lg bg-white mt-2">
            <img
              class="w-52 h-40 object-cover" 
              src="https://vietthuong.vn/upload/content/images/tuvan/guitar/Fender-FA-115.jpg"
              alt="Card image"
            />
            <div class="px-6 py-4">
              <div class="h20 font-bold text-medium mb-2">{{ item.title }}</div>
              <div class="font-bold text-medium mb-2">{{ item.price }}</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus mattis nunc vitae ante aliquet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
