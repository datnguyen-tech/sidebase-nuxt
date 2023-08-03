<template>
  <div @click="++number">
    {{ number }}
  </div>
</template>

<script lang="ts" setup>
  // const { data: count } = await useFetch('https://jsonplaceholder.typicode.com/users')
  const { data, error } = await useAsyncData('count', () => $fetch('https://jsonplaceholder.typicod2e.com/users'))
  console.log('🚀 ~ file: test.vue:10 ~ error:', error.value)

  console.log('🚀 ~ file: test.vue:9 ~ count:', data.value)

  const number = ref(1)
</script>

<style lang="scss"></style>
