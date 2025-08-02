<template>
  <aside class="w-64 bg-[#166534] text-white flex flex-col p-6 min-h-screen">
    <div class="text-2xl font-bold mb-10">Relief Org</div>
    <nav class="space-y-4 flex-grow">
      <a href="#" class="flex items-center space-x-2 hover:text-green-500">
        <span>📊</span><span>Dashboard</span>
      </a>
      <a href="#" class="flex items-center space-x-2 hover:text-green-500">
        <span>💰</span><span>Donations</span>
      </a>
      <a href="#" class="flex items-center space-x-2 hover:text-green-500">
        <span>👥</span><span>Beneficiaries</span>
      </a>
      <a href="#" class="flex items-center space-x-2 hover:text-green-500">
        <span>📅</span><span>Events</span>
      </a>
      <a href="#" class="flex items-center space-x-2 hover:text-green-500">
        <span>✉️</span><span>Messages</span>
      </a>
      <a href="#" class="flex items-center space-x-2 hover:text-green-500">
        <span>⚙️</span><span>Settings</span>
      </a>
    </nav>
    <button @click="logout" class="mt-8 w-full text-left hover:text-red-600">🚪 Logout</button>
  </aside>
</template>

<script setup>
const logout = () => {
  alert('You have been logged out.');
}
</script>
