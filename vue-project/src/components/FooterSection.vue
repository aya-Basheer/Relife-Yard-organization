<template>
  <footer class="bg-gray-900 text-gray-300 py-10 px-4">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
      <!-- Left -->
      <div class="flex-1">
        <img src="/public/image/yard-white.png" alt="YARD Logo" class="w-36 mb-4" />
        <p class="text-sm leading-relaxed mb-4">
          Yemen Al-Khair for Relief & Development Foundation (YARD) is an independent, non-profit and non-governmental
          foundation that was established in 2013 to implement projects for Relief and Development.
        </p>
        <div class="space-y-2 text-sm">
          <p><i class="fas fa-map-marker-alt text-green-500 mr-2"></i> AlHazm Dis. AlJwaf Gov. Yemen</p>
          <p><i class="fas fa-phone-alt text-green-500 mr-2"></i> Phone: 800656 / 00967-06-3224</p>
          <p><i class="fas fa-envelope text-green-500 mr-2"></i> Email: info@yard-yemen.org</p>
        </div>
      </div>

      <!-- Right -->
      <div class="flex-1">
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-3">Newsletter</h3>
          <div class="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              class="w-full sm:w-2/3 px-3 py-2 border border-white bg-transparent text-white rounded"
            />
            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>

        <p class="font-semibold mb-3">We Are Social</p>
        <div class="flex gap-4 text-xl">
          <a href="https://www.facebook.com/yardyemen" target="_blank" class="hover:text-green-500">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="hover:text-green-500">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-green-500">
            <i class="fas fa-home"></i>
          </a>
          <a href="#" class="hover:text-green-500">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <p class="text-center text-sm text-gray-400 mt-10 pt-5 border-t border-gray-700">
      &copy; 2021 <span class="text-white font-semibold">YARD</span> All Rights Reserved
    </p>
  </footer>
</template>
