<script setup>
const { t } = useI18n()

const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const subscriptionData = ref(null)

const handleSubmit = async () => {
  if (!email.value || isLoading.value) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: email.value }
    })

    subscriptionData.value = data
    isSuccess.value = true
    email.value = ''

    setTimeout(() => {
      isSuccess.value = false
      subscriptionData.value = null
    }, 10000)

  } catch (error) {
    console.error('Subscription error:', error)
    errorMessage.value = error.data?.message || 'Something went wrong. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="cta" class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
    <div class="absolute inset-0 opacity-20" aria-hidden="true">
      <div class="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_0%,white,transparent_25%),radial-gradient(circle_at_0%_80%,white,transparent_25%)]"></div>
    </div>

    <div class="relative mx-auto max-w-screen-xl px-6 py-16 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white">{{ t('finalCtaTitle') }}</h2>
      <p class="mt-3 text-white/90 max-w-2xl mx-auto">{{ t('finalCtaSubtitle') }}</p>

      <!-- Сообщение об успехе -->
      <div v-if="isSuccess" class="mt-6 p-6 rounded-lg bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
        <div class="text-center">
          <div class="text-4xl mb-3">🎉</div>
          <h3 class="text-green-100 font-bold text-lg mb-2">{{ t('waitlistWelcome') }}</h3>
          <p class="text-green-200/90 text-sm mb-3">{{ subscriptionData?.message || t('subscribeSuccess') }}</p>

          <div v-if="subscriptionData?.emailId" class="bg-green-600/20 rounded-lg p-3 mb-3">
            <p class="text-green-100 text-sm flex items-center justify-center gap-2">
              <span>📧</span>
              <span>{{ t('emailSent') }}</span>
            </p>
          </div>

          <div v-else-if="subscriptionData?.emailWarning" class="bg-yellow-500/20 rounded-lg p-3 mb-3">
            <p class="text-yellow-100 text-sm flex items-center justify-center gap-2">
              <span>⏳</span>
              <span>{{ subscriptionData.emailWarning }}</span>
            </p>
          </div>

          <p class="text-green-200/80 text-xs">
            {{ t('exclusiveUpdates') }}
          </p>
        </div>
      </div>

      <!-- Форма подписки -->
      <form v-if="!isSuccess" @submit.prevent="handleSubmit" class="mt-8 max-w-md mx-auto flex flex-col gap-3 sm:flex-row">
                <input
          v-model="email"
          type="email"
          required
          placeholder="Enter your email"
          :disabled="isLoading"
          class="flex-1 rounded-lg px-4 py-3 bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          :disabled="isLoading || !email"
          class="px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center min-w-[140px]"
        >
          <span v-if="!isLoading">{{ t('finalCtaButton') }}</span>
          <div v-else class="flex items-center gap-2">
            <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>{{ t('joining') }}</span>
          </div>
        </button>
      </form>

      <!-- Сообщение об ошибке -->
      <div v-if="errorMessage" class="mt-4 p-3 rounded-lg bg-red-500/20 border border-red-400/30">
        <p class="text-red-200 text-sm">❌ {{ errorMessage }}</p>
      </div>

      <p v-if="!isSuccess" class="mt-3 text-xs text-white/80">{{ t('finalCtaPrivacy') }}</p>
    </div>
  </section>
</template>

