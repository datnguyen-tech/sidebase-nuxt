<template>
  <!-- <div @click="++number">
    {{ number }}
  </div> -->
  <div>
    {{ 1 }}
  </div>
</template>

<script lang="ts" setup>
  const { $api } = useNuxtApp()

  const getData = async () => {
    try {
      const data = await $api.products.getProducts()
      console.log('🚀 ~ file: test.vue:16 ~ getData ~ data:', data)
    } catch (error) {
      console.log('vao day')
    }
  }

  onMounted(() => {
    getData()
  })
</script>

<style lang="scss"></style>
