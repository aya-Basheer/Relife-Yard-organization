<template>
  <main class="py-12">
    <!-- حاوية رئيسية بعرض أقصى مع توسيط -->
    <div class="flex flex-col items-center space-y-8 px-4 max-w-[1500px] mx-auto">
      
      <!-- نموذج الاتصال -->
      <section class="w-full max-w-[1000px] bg-green-900 bg-opacity-50 p-6 rounded-lg">
        <h2 id="form-title" class="text-2xl font-bold text-white mb-6 text-center">
          Contact Us
        </h2>
        <form @submit.prevent="handleSubmit" autocomplete="on" novalidate>
          <label for="name" class="block text-white font-semibold mb-2">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label for="email" class="block text-white font-semibold mb-2">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label for="phone" class="block text-white font-semibold mb-2">Phone</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            class="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            class=" px-6 py-3  bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Send
          </button>
        </form>
      </section>

      <!-- مسافة بين النموذج والخريطة -->
      <div class="w-full max-w-[1000px] my-10"></div>

      <!-- خريطة Google -->
      <section class="w-full flex justify-center">
        <iframe
          class="w-full max-w-[1000px] h-[400px] rounded-lg shadow-lg mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15391.524903905967!2d44.1834867!3d15.3286886!3m2!1i1024!2i768!4f13.1!2m1!1syard%20yemen%20org!5e0!3m2!1sar!2s!4v1753351086390!5m2!1sar!2s"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <!-- مسافة بين الخريطة والفوتر -->
      <div class="w-full max-w-[1000px] my-8"></div>

    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: ''
})

function handleSubmit() {
  if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
    alert('Please fill in all fields!')
    return
  }
  if (form.name.trim().length < 4) {
    alert('Name must be at least 4 characters long.')
    return
  }
  if (!form.email.includes('@')) {
    alert('Email is not valid.')
    return
  }
  if (!/^\d+$/.test(form.phone)) {
    alert('Phone must contain numbers only.')
    return
  }

  alert('Your request is under process. We will get back to you later.')

  form.name = ''
  form.email = ''
  form.phone = ''
}
</script>
