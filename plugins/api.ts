import { $fetch, FetchOptions } from 'ofetch'

// import local module repository
import ProductsModule from '~/repository/modules/product'

interface IApiInstance {
  products: ProductsModule
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const accessToken = useCookie('access_token')

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl as string,

    onRequest({ options }) {
      options.headers = { ...options.headers, Authorization: accessToken.value ? `Bearer ${accessToken.value}` : '' }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        accessToken.value = null
        location.href = '/login'
      }
      if (response.status === 400) {
        // show notify in here
      }
    }
  }

  const apiFetcher = $fetch.create(fetchOptions)

  const modules: IApiInstance = {
    products: new ProductsModule(apiFetcher)
  }

  return {
    provide: {
      api: modules
    }
  }
})
