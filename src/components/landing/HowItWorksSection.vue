<script setup>
const { t } = useI18n()
</script>

<template>
  <section id="how-it-works" class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="text-center mb-8">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ t('howItWorksTitle') }}</h2>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
          <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{{ t('step1Title') }}</h3>
          <p class="text-gray-500 dark:text-gray-400">{{ t('step1Desc') }}</p>
        </div>
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
          <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{{ t('step2Title') }}</h3>
          <p class="text-gray-500 dark:text-gray-400">{{ t('step2Desc') }}</p>
        </div>
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
          <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{{ t('step3Title') }}</h3>
          <p class="text-gray-500 dark:text-gray-400">{{ t('step3Desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
