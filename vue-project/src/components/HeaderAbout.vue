<template>
  <header class=" bg-emerald-200  shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
       <!-- <span class="absolute bottom-0 left-4 w-[calc(100%-30px)] h-px bg-green-900"></span> -->
      <!-- Logo -->
      <router-link to="/" class="block w-40">
        <img src="/image/YARD.png" alt="logo" class="w-full h-auto" />
      </router-link>

      <!-- Navigation -->
      <nav class="flex items-center gap-6">
        <ul class="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
          <li><router-link to="/" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">Home</router-link></li>
          <li><router-link to="/services" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">Services</router-link></li>
          <li><router-link to="/about" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">About Us</router-link></li>
       
          <li><router-link to="/programs" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">Program</router-link></li>
          <li><router-link to="/media" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">Media</router-link></li>
          <li><router-link to="/contact" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">Contact</router-link></li>
                    <li><router-link to="/dashboard" class="py-4 px-2 hover:text-green-900 hover:border-green-600 border-b-2 border-transparent duration-500">Dashboard</router-link></li>
        </ul>

        <!-- Icons -->
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="text-gray-600 hover:text-green-700">
            <i class="fas fa-globe"></i>
          </button>
          <button @click="toggleTheme" class="text-gray-600 hover:text-green-700">
            <i class="fas fa-moon"></i>
          </button>
          <button @click="toggleSearch" class="text-gray-600 hover:text-green-700">
            <i class="fas fa-search"></i>  
          </button>
        </div>
      </nav>
    </div>

    <!-- Search Overlay -->
    <div
      v-show="isSearchOpen"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 flex-col"
    >
      <input
        type="text"
        placeholder="Search..."
        class="px-6 py-3 w-[90%] max-w-xl text-lg rounded shadow-md"
      />
      <button @click="toggleSearch" class="mt-6 text-white underline hover:text-green-300">
        Close
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isSearchOpen = ref(false)

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

const toggleLang = () => {
  alert('Arabic language support will be added later.')
}

const toggleTheme = () => {
      console.log('Toggle theme clicked!')
  const html = document.documentElement
  const currentTheme = html.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)

  
  // مؤقتاً للتجربة:
  if(newTheme === 'dark') {
    document.body.style.backgroundColor = '#121212'
    document.body.style.color = '#f1f1f1'
  } else {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>
