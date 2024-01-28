<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="h-1/6 bg-gray-800 text-white">
    <div class="wrapper mx-auto py-4 px-6 flex justify-between items-center">
      <nav>
        <RouterLink to="/" class="hover:text-gray-300 mr-4">Home</RouterLink>
        <RouterLink to="/cart" class="hover:text-gray-300">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class=""/>
</template>
