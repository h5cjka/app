/* eslint-env serviceworker */

// 接收推送
self.addEventListener('push', event => {
  console.log('message received', event)
  const notification = event.data.json()
  const [title, options] = [
    notification.title,
    {
      body: notification.body,
      data: notification.data,
      icon: 'static/logo.jpg',
      image: notification.image
    }
  ]

  event.waitUntil(self.registration.showNotification(title, options))
})

// 点击通知
self.addEventListener('notificationclick', event => {
  const notification = event.notification
  console.log('Notification clicked', notification)
  notification.close()
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(clientList => {
    console.table(clientList)
    clientList.forEach(client => {
      if (client.url.match(notification.data.url) && 'focus' in client) {
        return client.focus()
      }
      if (clients.openWindow) {
        return clients.openWindow(notification.data.url)
      }
    })
  }))
})
