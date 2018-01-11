/* eslint-env worker, serviceworker */
/* eslint-disable no-undef */
'use strict'

const isLocalhost = Boolean(
  self.location.hostname === 'localhost' ||
  self.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  ) ||
  self.location.hostname === '[::1]'
)

firebase.initializeApp({messagingSenderId: '48744293829'})

let messaging = firebase.messaging()
messaging.requestPermission()
  .then(() => {
    console.log('已开启通知')
    return messaging.getToken()
  })
  .then(token => {
    console.log(token)
    const p = document.createElement('p')
    p.innerHTML = token
    document.body.appendChild(p)
  })
  .catch(err => {
    console.log(err)
  })
messaging.onMessage(payload => {
  console.log('Message received', payload)
})

if ('serviceWorker' in navigator &&
    (self.location.protocol === 'https:' || isLocalhost)) {
  navigator.serviceWorker.register('sw.js')
    .then(registration => {
      messaging.useServiceWorker(registration)
    })
    .catch(err => {
      console.log('注册 service worker 出现问题:', err)
    })
}
