<script setup>
const { t } = useI18n()

// Пример сырых данных для демонстрации
const rawData = `Region,Sales,Date
North,2450,2024-01
South,1890,2024-01
East,3120,2024-01
West,2200,2024-01`

const parsedSeries = computed(() => {
  const lines = rawData.split('\n')
  const [, ...rows] = lines
  const series = rows
    .map((row) => row.split(',').map((cell) => cell.trim()))
    .map(([region, sales]) => ({ region, sales: Number(sales) }))
    .filter((item) => !Number.isNaN(item.sales))
  return series
})

const maxSales = computed(() => {
  return parsedSeries.value.reduce((max, item) => Math.max(max, item.sales), 0)
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{{ t('showcaseTitle') }}</h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">{{ t('showcaseSubtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Блок "ДО" -->
        <div>
          <h3 class="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">{{ t('showcaseBefore') }}</h3>
          <div class="bg-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300 shadow-lg">
            <pre><code>{{ rawData }}</code></pre>
          </div>
        </div>

        <!-- Блок "ПОСЛЕ" -->
        <div>
          <h3 class="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">{{ t('showcaseAfter') }}</h3>
          <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div class="flex items-end justify-between mb-6">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Bar chart — Sales by region</h4>
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span class="inline-block h-3 w-3 rounded-sm bg-blue-500"></span>
                <span>Sales</span>
              </div>
            </div>

            <div class="space-y-3">
              <div v-for="item in parsedSeries" :key="item.region" class="grid grid-cols-12 items-center gap-3">
                <div class="col-span-3 md:col-span-2 text-gray-700 dark:text-gray-200 text-sm font-medium truncate">{{ item.region }}</div>
                <div class="col-span-7 md:col-span-9">
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                    <div
                      class="h-6 bg-gradient-to-r from-blue-500 to-indigo-500"
                      :style="{ width: (item.sales / maxSales) * 100 + '%' }"
                    ></div>
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1 text-right text-gray-600 dark:text-gray-300 text-sm tabular-nums">{{ item.sales }}</div>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div>
                <p class="font-medium text-gray-700 dark:text-gray-300">{{ t('showcaseInsightTitle1') }}</p>
                <p>{{ t('showcaseInsight1') }}</p>
              </div>
              <div>
                <p class="font-medium text-gray-700 dark:text-gray-300">{{ t('showcaseInsightTitle2') }}</p>
                <p>{{ t('showcaseInsight2') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
