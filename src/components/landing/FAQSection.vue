<script setup>
const { t } = useI18n()

const faqs = [
  { q: t('faq1Question'), a: t('faq1Answer') },
  { q: t('faq2Question'), a: t('faq2Answer') },
  { q: t('faq3Question'), a: t('faq3Answer') }
]
</script>

<template>
  <section id="faq" class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-6 py-16">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ t('faqTitle') }}</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="item in faqs" :key="item.q" class="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.q }}</h3>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


