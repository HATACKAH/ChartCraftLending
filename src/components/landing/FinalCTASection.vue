<script setup>
const { t } = useI18n()
</script>

<template>
  <section id="cta" class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
    <div class="absolute inset-0 opacity-20" aria-hidden="true">
      <div class="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_0%,white,transparent_25%),radial-gradient(circle_at_0%_80%,white,transparent_25%)]"></div>
    </div>

    <div class="relative mx-auto max-w-screen-xl px-6 py-16 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white">{{ t('finalCtaTitle') }}</h2>
      <p class="mt-3 text-white/90 max-w-2xl mx-auto">{{ t('finalCtaSubtitle') }}</p>

      <form class="mt-8 max-w-md mx-auto flex gap-3">
        <input type="email" required placeholder="Email" class="flex-1 rounded-lg px-4 py-3 bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none" />
        <button type="submit" class="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black">{{ t('finalCtaButton') }}</button>
      </form>

      <p class="mt-3 text-xs text-white/80">{{ t('finalCtaPrivacy') }}</p>
    </div>
  </section>
</template>


