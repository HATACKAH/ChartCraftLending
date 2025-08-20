<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden bg-gray-900 text-white">
    <div class="absolute inset-0 -z-0 opacity-30">
      <div class="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_30%),radial-gradient(circle_at_80%_0%,#a78bfa,transparent_25%),radial-gradient(circle_at_0%_80%,#34d399,transparent_25%)]"></div>
    </div>
    <div class="relative mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-[80vh] lg:items-center">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          {{ t('heroTitle') }}
        </h1>

        <p class="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed text-white/90">
          {{ t('heroSubtitle') }}
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring sm:w-auto"
            href="#cta"
          >
            {{ t('heroCta') }}
          </a>
          <a
            class="block w-full rounded border border-white/30 px-8 py-3 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring sm:w-auto"
            href="#features"
          >
            {{ t('navFeatures') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
