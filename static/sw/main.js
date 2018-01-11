/* eslint-env worker, serviceworker */
'use strict'

const isLocalhost = Boolean(
  self.location.hostname === 'localhost' ||
  self.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  ) ||
  self.location.hostname === '[::1]'
)

if ('serviceWorker' in navigator &&
    (self.location.protocol === 'https:' || isLocalhost)) {
  navigator.serviceWorker.register('sw.js')
    .then(registration => {})
    .catch(err => {
      console.log('注册 service worker 出现问题:', err)
    })
}
