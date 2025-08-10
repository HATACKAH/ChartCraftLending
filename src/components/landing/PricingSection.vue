<script setup>
const { t } = useI18n()

const plans = [
  {
    id: 'starter',
    badge: 'Free',
    price: '0',
    period: t('pricingPerMonth'),
    title: t('pricingStarter'),
    description: t('pricingStarterDesc'),
    features: [
      t('pricingFeat1'),
      t('pricingFeat2'),
      t('pricingFeat3')
    ],
    cta: t('pricingCta'),
    highlight: false
  },
  {
    id: 'pro',
    badge: t('popular'),
    price: '12',
    period: t('pricingPerMonth'),
    title: t('pricingPro'),
    description: t('pricingProDesc'),
    features: [
      t('pricingFeat1'),
      t('pricingFeat2'),
      t('pricingFeat3'),
      t('pricingFeat4')
    ],
    cta: t('pricingCta'),
    highlight: true
  },
  {
    id: 'team',
    badge: 'Teams',
    price: '29',
    period: t('pricingPerMonth'),
    title: t('pricingTeam'),
    description: t('pricingTeamDesc'),
    features: [
      t('pricingFeat1'),
      t('pricingFeat2'),
      t('pricingFeat4'),
      t('pricingFeat5')
    ],
    cta: t('pricingCta'),
    highlight: false
  }
]
</script>

<template>
  <section id="pricing" class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-6 py-16">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{{ t('pricingTitle') }}</h2>
        <p class="mt-3 text-gray-600 dark:text-gray-300">{{ t('pricingSubtitle') }}</p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.id"
          :class="[
            'p-6 rounded-2xl border shadow-sm transition-transform',
            'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700',
            plan.highlight ? 'ring-2 ring-blue-500 scale-[1.01]' : ''
          ]"
        >
          <div class="flex items-baseline justify-between mb-4">
            <span class="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{{ plan.badge }}</span>
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ plan.price }}<span class="text-base font-normal text-gray-500">/{{ plan.period }}</span></span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ plan.title }}</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-300">{{ plan.description }}</p>
          <ul class="mt-4 space-y-2">
            <li v-for="feat in plan.features" :key="feat" class="flex gap-2 text-gray-700 dark:text-gray-300 items-center">
              <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>{{ feat }}</span>
            </li>
          </ul>
          <div class="mt-6">
            <a :href="'#cta'" class="block w-full text-center px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">{{ plan.cta }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


