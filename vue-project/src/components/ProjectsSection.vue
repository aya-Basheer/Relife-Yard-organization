<template>
  <section class="  projects py-10 px-4 ">
    <h1 class="text-3xl font-bold text-center text-[#10221b] mb-10 mt-20">
      Lastest Project
    </h1>

    <div
      class="max-w-[1500px] flex flex-col md:flex-row md:justify-evenly md:items-stretch md:gap-[30px]  items-center gap-6   mx-auto  grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(290px,1fr))]"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="text-center p-4 animate-fade-in-up"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="h-[20rem] w-[20rem] mx-auto mb-4 rounded-[10%] object-cover transition-transform duration-500 ease-in-out"
        />
        <h3 class="text-2xl text-[#219150] mb-2">{{ project.title }}</h3>
        <p class="text-gray-700 mb-3">{{ project.description }}</p>
        <a href="#" class="inline-block bg-[#219150] text-white px-4 py-2 rounded hover:bg-[#1a7745] transition">
          Read More
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    image: '/public/image/YARDproject1.jpg',
    title: 'Bungee Jump',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.'
  },
  {
    image: '/public/image/YARD3jpg.jpg',
    title: 'Zip Lines',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.'
  },
  {
    image: '/public/image/YARD-project.jpg',
    title: 'Canoeing',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.'
  }
]
</script>
