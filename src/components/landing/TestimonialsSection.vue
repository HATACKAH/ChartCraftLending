<script setup>
const { t } = useI18n()

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director, TechCorp',
    textKey: 'testi1',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SM'
  },
  {
    name: 'James Richardson',
    role: 'Product Manager, DataFlow',
    textKey: 'testi2',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JR'
  },
  {
    name: 'Emma Thompson',
    role: 'Business Analyst, FinanceHub',
    textKey: 'testi3',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=ET'
  }
]
</script>

<template>
  <section id="testimonials" class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-6 py-16">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ t('testimonialsTitle') }}</h2>
        <p class="mt-3 text-gray-600 dark:text-gray-300">{{ t('testimonialsSubtitle') }}</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in testimonials"
          :key="item.name"
          class="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
        >
          <div class="flex items-center gap-4 mb-4">
            <img :src="item.avatar" alt="avatar" class="h-10 w-10 rounded-full" />
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">{{ item.name }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.role }}</p>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300">{{ t(item.textKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>