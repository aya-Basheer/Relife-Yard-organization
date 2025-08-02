<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-white w-[90%] max-w-lg p-6 rounded-xl shadow-lg relative">
      <button @click="close" class="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl">&times;</button>
      <h2 class="text-xl font-bold mb-4 text-gray-800">إضافة مشروع جديد</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-gray-600 mb-1">Project Name</label>
          <input v-model="projectName" type="text" required class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label class="block text-gray-600 mb-1">Description</label>
          <textarea v-model="description" rows="3" required class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
        </div>
        <div>
          <label class="block text-gray-600 mb-1">Cost ($)</label>
          <input v-model.number="cost" type="number" required class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div class="text-right">
          <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">حفظ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['close', 'save'])

const projectName = ref('')
const description = ref('')
const cost = ref(null)

const close = () => {
  emit('close')
  resetForm()
}

const resetForm = () => {
  projectName.value = ''
  description.value = ''
  cost.value = null
}

const submitForm = () => {
  if (!projectName.value || !description.value || cost.value === null) return
  // إرسال البيانات للوالد
  emit('save', {
    projectName: projectName.value,
    description: description.value,
    cost: cost.value,
  })
  close()
}
</script>
