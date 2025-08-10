<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="flex items-center space-x-4">
    <NuxtLink
      v-for="lang in availableLocales"
      :key="lang.code"
      :to="switchLocalePath(lang.code)"
      class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      {{ lang.name }}
    </NuxtLink>
  </div>
</template>