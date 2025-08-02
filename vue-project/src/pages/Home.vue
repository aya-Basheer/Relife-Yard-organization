<template>

  <main class="w-full">
  <div class="md:w-full">
  <Slider />
  </div>
  <!-- قسم المشاريع -->
    <section class=" md:w-full">
      <ProjectsSection />
    </section>
     <PartinarSection />

</main>
</template>

<script setup>
import ProjectsSection from '@/components/ProjectsSection.vue'
import Slider from '@/components/Slider.vue'
import PartinarSection from '@/components/PartinarSection.vue'


</script>


