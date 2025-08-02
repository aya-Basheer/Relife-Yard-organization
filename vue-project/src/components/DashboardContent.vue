<template>
  <main class="flex-1 p-6 overflow-auto">

    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
    </div>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">Total Donations</p>
        <h2 class="text-2xl font-bold">$34,800</h2>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">Active Projects</p>
        <h2 class="text-2xl font-bold">7</h2>
      </div>
      <div class="bg-white p-4 rounded shadow">
        <p class="text-gray-600">Beneficiaries</p>
        <h2 class="text-2xl font-bold">1,204</h2>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Bar Graph Simulation -->
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-lg font-semibold mb-4">Projects by Status</h3>
        <div class="space-y-2">
          <div>Ongoing <div class="h-2 bg-green-500 w-3/4 rounded"></div></div>
          <div>Upcoming <div class="h-2 bg-yellow-500 w-2/4 rounded"></div></div>
          <div>Completed <div class="h-2 bg-blue-500 w-4/5 rounded"></div></div>
        </div>
      </div>

      <!-- Pie Chart Simulation -->
      <div class="bg-white p-4 rounded shadow">
        <h3 class="text-lg font-semibold mb-4">Donations Timeline</h3>
        <div class="flex items-center justify-center h-40">
          <div class="w-24 h-24 rounded-full border-8 border-green-500 border-t-yellow-500 border-b-red-500 rotate-45"></div>
        </div>
        <div class="mt-4 text-sm text-gray-600 space-y-1">
          <p><span class="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>Last 60 days</p>
          <p><span class="inline-block w-3 h-3 bg-yellow-500 mr-2 rounded-full"></span>30 days</p>
          <p><span class="inline-block w-3 h-3 bg-red-500 mr-2 rounded-full"></span>Expired</p>
        </div>
      </div>
    </div>

    <!-- Projects Table -->
    <div class=" bg-white p-4 rounded shadow">
      <h3 class="text-lg font-semibold mb-4">Recent Projects</h3>
      <table class="w-full table-auto">
        <thead class="bg-gray-200 text-left">
          <tr>
            <th class="p-2">Project</th>
            <th class="p-2">Location</th>
            <th class="p-2">Amount</th>
            <th class="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects" :key="index">
            <td class="p-2">{{ project.projectName }}</td>
            <td class="p-2">{{ project.location || 'Unknown' }}</td>
            <td class="p-2">${{ project.cost }}</td>
            <td class="p-2">
              <span
                :class="{
                  'bg-green-100 text-green-700 px-2 py-1 text-xs rounded': project.status === 'Active',
                  'bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded': project.status === 'Upcoming',
                  'bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded': project.status === 'Completed',
                }"
              >
                {{ project.status || 'Active' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button @click="$emit('openModal')" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow mt-6">
      + إضافة مشروع جديد
    </button>
  </main>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['openModal'])

const projects = ref([
  { projectName: 'Water Aid Program', location: 'Sudan', cost: 12400, status: 'Active' },
  { projectName: 'Food Relief 2025', location: 'Yemen', cost: 8950, status: 'Upcoming' },
  { projectName: 'Winter Shelter Drive', location: 'Syria', cost: 14200, status: 'Completed' },
])
</script>
