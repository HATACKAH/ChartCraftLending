<script setup>
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="mx-auto max-w-screen-xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-gray-600 dark:text-gray-300">© {{ year }} ChartCraft. All rights reserved.</p>
      <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <a href="#features" class="hover:text-gray-900 dark:hover:text-white">{{ t('footerFeatures') }}</a>
        <a href="#faq" class="hover:text-gray-900 dark:hover:text-white">{{ t('footerFaq') }}</a>
        <a href="https://x.com/ChartCraftApp" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          We are on X
        </a>
      </div>
    </div>
  </footer>
</template>


