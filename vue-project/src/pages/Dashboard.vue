<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <DashboardContent @openModal="showModal = true" />
    <AddProjectModal :show="showModal" @close="showModal = false" @save="addProject" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import DashboardContent from '@/components/DashboardContent.vue'
import AddProjectModal from "../components/AddProjectModal.vue";

const showModal = ref(false)
const projects = ref([
  { projectName: 'Water Aid Program', location: 'Sudan', cost: 12400, status: 'Active' },
  { projectName: 'Food Relief 2025', location: 'Yemen', cost: 8950, status: 'Upcoming' },
  { projectName: 'Winter Shelter Drive', location: 'Syria', cost: 14200, status: 'Completed' },
])

function addProject(newProject) {
  // أضف المشروع الجديد لقائمة المشاريع
  projects.value.push({
    projectName: newProject.projectName,
    location: 'Unknown', // يمكنك تعديلها حسب الحاجة
    cost: newProject.cost,
    status: 'Active', // الوضع الافتراضي
  })
  showModal.value = false
}
</script>
