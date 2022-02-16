import {element} from './tools'

export function upload(selector) {
  const input = document.querySelector(selector)
  const open = element('button', ['btn'], 'open')

  input.insertAdjacentElement('afterend', open)

  open.addEventListener('click', () => input.click())
  input.addEventListener('change', event => {
    console.log(event.target.files)
  })

}
