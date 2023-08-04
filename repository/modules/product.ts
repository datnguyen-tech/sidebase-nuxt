import { AsyncDataOptions } from '#app'

// locals
import FetchFactory from '../factory'

type IProduct = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

class ProductsModule extends FetchFactory<IProduct[]> {
  private RESOURCE = '/users'

  async getProducts(asyncDataOptions?: AsyncDataOptions<IProduct[]>) {
    try {
      const data = await useAsyncData(() => {
        return this.call('GET', `${this.RESOURCE}`)
      }, asyncDataOptions)
      if (data.error.value) {
        throw data.error.value
      }
      return Promise.resolve(data.data.value)
    } catch (error) {
      console.log('loi')
      return Promise.reject(error)
    }
  }

  async getName() {
    try {
      const { data, error } = await useAsyncData(() => {
        return this.call('GET', `${this.RESOURCE}/1`)
      })
      if (error.value) {
        throw error.value
      }
      return Promise.resolve(data.value)
    } catch (error: any) {
      return Promise.reject(error)
    }
  }
}

export default ProductsModule
