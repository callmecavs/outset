const src = 'data:image/webp;base64,UklGRhIAAABXRUJQVlA4TAYAAAAvQWxvAGs='

const detect = () => {
  const { body } = document
  const image = document.createElement('img')
  image.addEventListener('load', () => body.classList.add('webp'))
  image.addEventListener('error', () => body.classList.add('no-webp'))
  image.setAttribute('src', src)
}

export default detect
