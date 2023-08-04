export const useRootStore = defineStore('root', () => {
  const { $api } = useNuxtApp()
  const count = ref(0)

  const getName = async () => {
    try {
      const data = await $api.products.getName()
      console.log('🚀 ~ file: test.vue:16 ~ getData ~ data:', data)
    } catch (error: any) {
      console.log('🚀 ~ file: root.ts:10 ~ getName ~ error:', error)
    }
  }

  return { count, getName }
})
