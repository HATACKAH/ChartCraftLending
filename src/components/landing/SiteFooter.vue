<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="mx-auto max-w-screen-xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-gray-600 dark:text-gray-300">© {{ year }} ChartCraft. All rights reserved.</p>
      <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <a href="#features" class="hover:text-gray-900 dark:hover:text-white">Features</a>
        <a href="#pricing" class="hover:text-gray-900 dark:hover:text-white">Pricing</a>
        <a href="#faq" class="hover:text-gray-900 dark:hover:text-white">FAQ</a>
      </div>
    </div>
  </footer>
</template>


