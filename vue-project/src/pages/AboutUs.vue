<template>

 
  <main class="min-h-[calc(100vh-160px)] py-20 bg-white"> <!-- مسافة رأسية مناسبة -->
    <section
      ref="aboutSection"
      class="opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <!-- النص -->
        <div class="text-gray-800">
          <h1 class="text-3xl font-bold mb-4 text-green-700">WHO WE ARE</h1>
          <p class="text-lg leading-relaxed mb-8">
            Yemen Al-Khair Relief & Development Foundation (YARD) is an independent non-profit and non-governmental foundation that was established in 2013 to implement projects for Relief and Development.
          </p>

          <h1 class="text-3xl font-bold mb-4 text-green-700">OUR VISION</h1>
          <p class="text-lg leading-relaxed">
            Superiority in humanitarian response and sustainable development program.
          </p>
        </div>

        <!-- الصورة -->
        <div>
          <img
            src="/image/YARD about.jpg"
            alt="About YARD"
            class="w-full rounded-lg border-t-[7px] border-r-[7px] border-green-600 hover:scale-105 transition-transform duration-500 shadow-md"
          />
        </div>
      </div>
    </section>
  </main>
  <router-view/>
</template>

<script setup>
// import Header from '@/components/Header.vue'
import Header from '@/components/HeaderAbout.vue'

import { onMounted, ref } from 'vue'

const aboutSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})
</script>
