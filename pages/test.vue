<template>
  <div @click="++number">
    {{ number }}
  </div>
</template>

<script lang="ts" setup>
  import { useRootStore } from '@/stores/root'
  const { $api } = useNuxtApp()
  const number = ref(1)

  const { getName } = useRootStore()

  const getData = async () => {
    try {
      const data = await $api.products.getProducts({ watch: [number] })
      console.log('🚀 ~ file: test.vue:16 ~ getData ~ data:', data)
    } catch (error) {
      console.log('vao day')
    }
  }

  onMounted(() => {
    getData()
    getName()
  })
</script>

<style lang="scss"></style>
