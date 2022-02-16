import {element} from './tools'

export function upload(selector) {

  let files = []
  
  

  const input = document.querySelector(selector)
  const open = element('button', ['btn'], 'open')
  const upload = element('button', ['btn', 'primary'], 'upload')
  const preview = element('div', ['preview'])
  upload.style.display = 'none'

  input.insertAdjacentElement('afterend', preview)
  input.insertAdjacentElement('afterend', upload)
  input.insertAdjacentElement('afterend', open)

  open.addEventListener('click', () => input.click())


  const inputChangeHandler= event => {
    
    if (!event.target.files) {
      return
    }
    files = Array.from(event.target.files)
    upload.style.display = 'inline'
    preview.innerHTML = ''

    files.forEach(file => {
      if (!file.type.match('image')) {
        return
      }

      const reader = new FileReader()

      reader.onload = ev => {
        const src = ev.target.result
        preview.insertAdjacentHTML('afterbegin', `<img src="${src}" />`)
      }

      reader.readAsDataURL(file)

    })
    
  }

  input.addEventListener('change', inputChangeHandler)

}
