/* eslint-env worker, serviceworker */
/* eslint-disable no-undef */
'use strict'

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

let firebaseOptions = {
  messagingSenderId: '48744293829'
}

firebase.initializeApp(firebaseOptions)

const messaging = firebase.messaging()
