const cache = Object.create(null)

if (process.env.NODE_ENV !== 'production') {
  window.cache = cache
}

export default cache
