<template>
  <main>
    <div class="relative w-full h-[600px] overflow-hidden">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-[#203656]/60 z-10"></div>

      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['absolute w-full h-full transition-opacity duration-1000', currentIndex === index ? 'opacity-100' : 'opacity-0']"
      >
        <img :src="slide.image" class="w-full h-full object-cover" :alt="slide.alt" />

        <!-- Caption -->
        <div
          class="absolute z-20 bg-[#175c5f]/20 text-white font-bold p-5 rounded-lg"
          :class="captionPosition"
        >
          <h3 class="text-2xl mb-2">{{ slide.title }}</h3>
          <p class="text-base">{{ slide.text }}</p>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-transparent text-green-400 hover:bg-black/80 text-3xl px-4 py-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-transparent text-green-400 hover:bg-black/80 text-3xl px-4 py-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
  {
    image: 'image/YARD1.jpg',
    alt: 'صورة 1',
    title: 'Our Values',
    text: 'Seeking to provide humanitarian aid for affected communities and building the capacity of',
  },
  {
    image: 'image/YARD2.jpg',
    alt: 'صورة 2',
    title: 'Our Mission',
    text: 'Seeking to provide humanitarian aid for affected communities and building the capacity of Yemeni people through the implementation of many highly effective programs',
  },
  {
    image: 'image/YARD3jpg.jpg',
    alt: 'صورة 3',
    title: 'Our Project',
    text: 'Seeking to provide humanitarian aid for affected communities and building the capacity of Yemeni people through the implementation of many highly effective programs',
  },
];

const currentIndex = ref(0);
let interval = null;

const showSlide = (index) => {
  currentIndex.value = index;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

const startAutoSlide = () => {
  interval = setInterval(() => {
    nextSlide();
  }, 3000);
};

const stopAutoSlide = () => {
  clearInterval(interval);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

const captionPosition =
  'w-[300px] h-[300px] bottom-12 left-1/2 -translate-x-1/2 sm:left-[600px] sm:translate-x-0';
</script>

<style scoped>
p {
  font-size: 19px;
  font-weight: 100;
}
@media (max-width: 768px) {
  .caption {
    width: 80%;
    font-size: 16px;
  }
}
@media (max-width: 480px) {
  .caption {
    width: 90%;
    font-size: 14px;
  }
}
</style>
