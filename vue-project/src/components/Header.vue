<template>
  <header class="fixed<Header/>
h-20 w-full inset-0 z-2 shadow">
    <div class="container border-b border-green-800 flex justify-between items-center relative min-h-20 px-3.5 mx-auto">
      <span class="absolute bottom-0 left-4 w-[calc(100%-30px)] h-px bg-green-900"></span>

      <!-- Logo -->
      <a href="#" class="logo">
        <img class="w-20" src="/public/image/YARD.png" alt="logo" />
      </a>

      <!-- Admin Panel -->
      <a href="/src/dashbord.html" class="text-sm text-gray-400 hover:underline">
        لوحة المشرف
      </a>

      <!-- Navigation -->
      <nav class="md:flex md:items-center md:space-x-4">
        <!-- Hamburger Icon -->
        <button @click="toggleMenu" class="md:hidden text-green-900 text-2xl focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Main Links -->
        <ul :class="['md:flex md:space-x-4 text-green-800 text-sm font-medium', showMenu ? 'flex flex-col absolute top-20 left-0 w-full bg-emerald-900 text-emerald-100 px-4 py-2 space-y-2 md:static md:bg-transparent md:text-green-800 md:space-y-0' : 'hidden md:flex']">
          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500" to="/">Home</router-link></li>
          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500" to="/services">Services</router-link></li>
          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent" to="/about">About Us</router-link></li>

          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500" to="/news">News</router-link></li>
          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent" to="/program">Program</router-link></li>
          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent " to="media">Media</router-link></li>
          <li><router-link class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent" to="/contact">Contact</router-link></li>
        </ul>

        <!-- Search Icon -->
        <div class="hidden md:block border-l border-green-800 pl-4 ml-4">
          <i class="fas fa-search text-green-900 text-lg"></i>
        </div>
      </nav>
    </div>
  </header>

</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>
