<template>
  <!-- <div @click="++number">
    {{ number }}
  </div> -->
  <div>
    {{ data }}
  </div>
</template>

<script lang="ts" setup>
  const { $api } = useNuxtApp()
  const { data } = await $api.products.getProducts()
  console.log(data)

  const number = ref(1)
</script>

<style lang="scss"></style>
