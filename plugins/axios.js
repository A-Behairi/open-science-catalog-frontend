const getUriWithParam = (baseUrl, params) => {
  const Url = new URL(baseUrl)
  const urlParams = new URLSearchParams(Url.search)
  for (const key in params) {
    if (params[key] !== undefined) {
      urlParams.set(key, params[key])
    }
  }
  Url.search = urlParams.toString()
  return Url.toString()
}

export default function ({
  $axios,
  $config: { staticEndpoint, staticBaseToReplace, dynamicEndpoint, backendEndpoint }
}, inject) {
  const staticCatalog = $axios.create()
  staticCatalog.setBaseURL(staticEndpoint)
  staticCatalog.baseToReplace = staticBaseToReplace
  // Add ".json" to all requests going to the static catalog
  staticCatalog.onRequest((config) => {
    const newUrl = `${config.url}.json`
    return {
      ...config,
      url: newUrl
    }
  })
  inject('staticCatalog', staticCatalog)

  const dynamicCatalog = $axios.create()
  dynamicCatalog.setBaseURL(dynamicEndpoint)
  // Add "f=json" query param to all requests going to the dynamic catalog
  dynamicCatalog.onRequest((config) => {
    const newUrl = getUriWithParam(config.baseURL + config.url, { f: 'json' })
    return {
      ...config,
      url: newUrl
    }
  })
  inject('dynamicCatalog', dynamicCatalog)

  const metadataBackend = $axios.create()
  metadataBackend.setBaseURL(backendEndpoint)
  inject('metadataBackend', metadataBackend)
}
