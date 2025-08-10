<script setup>
const { t } = useI18n()

const features = [
  {
    title: t('feature1Title'),
    description: t('feature1Desc'),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
  },
  {
    title: t('feature2Title'),
    description: t('feature2Desc'),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h8M4 18h8" /></svg>`
  },
  {
    title: t('feature3Title'),
    description: t('feature3Desc'),
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 12h18M3 17h18" /></svg>`
  }
]
</script>

<template>
  <section id="features" class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ t('featuresTitle') }}</h2>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div v-for="feature in features" :key="feature.title">
          <div class="flex items-center">
              <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-xl bg-blue-50 lg:h-14 lg:w-14 dark:bg-blue-900/20 text-blue-600 mr-3">
              <div v-html="feature.icon"></div>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ feature.title }}</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>