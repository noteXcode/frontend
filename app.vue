<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup> 
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#18181b' : 'white')
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],})
</script>