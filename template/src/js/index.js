import detectWebP from './utils/detect-webp.js'

if (module.hot) {
  module.hot.accept()
}

const boot = event => {
  detectWebP()
}

document.addEventListener('DOMContentLoaded', boot)
