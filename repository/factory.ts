import { $Fetch, FetchOptions } from 'ofetch'

class FetchFactory {
  private $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  /**
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param fetchOptions fetch options
   * @returns
   */
  async call<T>(method: string, url: string, data?: object, fetchOptions?: FetchOptions<'json'>): Promise<T> {
    try {
      return await this.$fetch<T>(url, {
        method,
        body: data,
        ...fetchOptions
      })
    } catch (error: any) {
      return Promise.reject(error)
    }
  }
}

export default FetchFactory
