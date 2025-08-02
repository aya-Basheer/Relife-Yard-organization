<template>
  <navbar class=" bg-emerald-200 dark:bg-gray-900 text-black dark:text-white shadow">
    <div class="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-4">
      <!-- الشعار -->
      <router-link to="/" class="block w-32">
        <img src="/public/image/YARD.png" alt="logo" class="w-full h-auto" />
      </router-link>

      <!-- القائمة -->
      <nav class="flex items-center gap-8">
        <ul class="hidden md:flex gap-6 font-semibold">
          <li><router-link to="/" class="text-green-700 hover:underline">Home</router-link></li>
          <li><a href="#" class="hover:underline">Services</a></li>
          <li><router-link to="/about" class="hover:underline">About Us</router-link></li>
          <li><a href="#" class="hover:underline">News</a></li>
          <li><a href="#" class="hover:underline">Program</a></li>
          <li><a href="#" class="hover:underline">Media</a></li>
          <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
        </ul>

        <!-- أزرار -->
        <div class="flex items-center gap-3">
          <!-- اللغة -->
          <button @click="toggleLang" class="bg-white dark:bg-gray-700 p-2 rounded">
            <i class="fas fa-globe"></i>
          </button>

          <!-- الوضع الليلي -->
          <button @click="toggleTheme" class="bg-white dark:bg-gray-700 p-2 rounded">
            <i class="fas fa-moon"></i>
          </button>

          <!-- البحث -->
          <button @click="openSearch" class="bg-white dark:bg-gray-700 p-2 rounded">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </nav>
    </div>

    <!-- طبقة البحث -->
    <div v-if="showSearch" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 flex-col">
      <input
        type="text"
        placeholder="ابحث هنا..."
        class="p-4 text-lg w-4/5 max-w-xl rounded"
      />
      <button @click="closeSearch" class="mt-4 text-white underline">إغلاق</button>
    </div>
  </navbar>

</template>

<script setup>
import { ref, onMounted } from 'vue'

// الوضع الليلي
const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme')
  const next = current === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved)
  }
})

// البحث
const showSearch = ref(false)
const openSearch = () => (showSearch.value = true)
const closeSearch = () => (showSearch.value = false)

// اللغة
const toggleLang = () => {
  alert('سيتم إضافة دعم اللغة لاحقًا')
}
</script>

<style scoped>
/* لو تحب تضيف أنماط إضافية */
</style>
