import {upload} from './upload.js'

upload('#file', {
    multi: true,
    accept: ['.jpg', '.jpeg', '.png', '.gif'],
    onUpload(files) {
        console.log('files:', files);
    }
})
