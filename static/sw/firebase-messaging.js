module.exports = `
  <script src=https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js></script>
  <script src=https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js></script>
  <script>
    const options = {
      messagingSenderId: '48744293829'
    }

    firebase.initializeApp(options)

    const messaging = firebase.messaging()
    messaging.requestPermission()
    .then(() => {
      console.log('已开启通知')
      return messaging.getToken()
    })
    .then(token => {
      console.log(token)
    })
    .catch(err => {
      console.log(err)
    })
    messaging.onMessage(payload => {
      console.log('Message received', payload)
    })
  </script>
`
