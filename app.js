import firebase from 'firebase/app'
import 'firebase/storage'
import {upload} from './upload.js'
import 'firebase/database'



import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyDQ9d63vL1IkhPaIh6XgkFgZkSvr2cadpg",
    authDomain: "js-file-upload-abb7f.firebaseapp.com",
    projectId: "js-file-upload-abb7f",
    storageBucket: "js-file-upload-abb7f.appspot.com",
    messagingSenderId: "20348775563",
    appId: "1:20348775563:web:734d6bd365c5a92c73388e"
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app);

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
        const storageRef = ref(storage, `images/${file.name}`)
        const task = uploadBytesResumable(storageRef, file)

      task.on('state_changed', snapshot => {
        const percentage = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + '%'
        const block = blocks[index].querySelector('.preview-info-progress')
        block.textContent = percentage
        block.style.width = percentage
      }, error => {
        console.log(error)
      }, () => {
        task.snapshot.storageRef.getDownloadURL().then(url => {
          console.log('Download URL', url)
        })
      })
    })
  }
})