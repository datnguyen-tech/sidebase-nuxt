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
      if (data.error) {
        throw data.error
      }
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default ProductsModule
