<script setup>
const { t } = useI18n()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <button class="text-xl font-bold text-gray-900 dark:text-white" @click="scrollToTop">
        ChartCraft
      </button>
      <div class="hidden md:flex items-center space-x-8">
        <a href="#features" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">{{ t('navFeatures') }}</a>
        <a href="#how-it-works" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">{{ t('navHowItWorks') }}</a>
        <a href="#pricing" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">{{ t('navPricing') }}</a>
        <a href="#faq" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">{{ t('navFaq') }}</a>
        <a href="#testimonials" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">{{ t('navTestimonials') }}</a>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#cta" class="hidden sm:block px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          {{ t('navWaitlist') }}
        </a>
        <LanguageSwitcher />
      </div>
    </nav>
  </header>
</template>