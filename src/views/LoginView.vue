<script setup>
import axios from 'axios';
import { onMounted, nextTick, ref  } from 'vue';
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

// import { useAuthStore } from '../store/AccountStore';
// Set the base URL for your Django REST Framework API
// const authStore = useAuthStore();
const loginUrl = 'https://shop-guitar.onrender.com/app/login/';
const isLogin = ref(false)
const username = ref('');
const password = ref('');
// Set the Authorization header with your token
// axios.defaults.headers.common['Authorization'] = 'token a64476e9cea4ca167d4de8ad9ede424037506019';

// Fetch data when the component is mounted
const fetchData = async () => {
  try {
    const data = {
      username: username.value,
      password: password.value,
      // username: "adam",
      // password: "Pass1234!",
    };
    const response = await axios.post(loginUrl, data);
    // Handle the API response
    console.log(response.data);
    console.log(response.data.token);
    console.log(response.data.user.id);
    if(response.data.token){
        isLogin.value = true
    }
    // authStore.setAuth(response.data.token, response.data.user.id, response.data.isAdmin)
    // const result = authStore.getAuth()
    // console.log("result", result)
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
};

// onMounted(() => {
//   fetchData();
//   console.log("after fetch")

// });

const login = async () => {
    const response = await fetchData()
  // Handle login logic here
  if(isLogin.value == true){
    router.push({ name: "home"});
  }
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="login">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="username" class="sr-only">Username</label>
                <input id="username" v-model="username" name="username" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
    
            <div>
              <button @click="login" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
</template>