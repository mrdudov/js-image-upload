import {upload} from './upload.js'

upload('#file', {
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  multiple: true
})
