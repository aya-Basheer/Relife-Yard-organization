<script setup>
const partinarImages = [
  '/image/YARD partinar 1.jpg',
  '/image/YARD partinar2.jpg',
  '/image/YARD partinar 3.jpg',
  '/image/YARD partinar 4.png'
]
</script>

<template>
  <section class="mt-16 px-5 py-10 bg-[#f9f9f9] overflow-x-auto">
    <div
     class="flex flex-col items-center gap-6 md:flex-row md:justify-evenly md:items-stretch md:gap-[30px] animate-slide-in">

      <div
        v-for="(logo, index) in partinarImages"
        :key="logo"
        class="flex-none mx-auto mt-5 animate-fade-in-up"
      >
        <img
          :src="logo"
          class="w-[160px] h-auto object-contain rounded-[12px] shadow-md grayscale hover:scale-105 hover:grayscale-0 transition-transform duration-300 ease-in-out"
          alt="partner logo"
        />
      </div>
    </div>
  </section>
</template>
