const app = require('express')()

const host = '127.0.0.1'
const port = 3000

app.get('/home', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Home page')
  })
  app.get('/', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Home page')
  })
  app.get('/data/:id', (req, res) => {
    if (req.params.id <=100)
    {
      res.status(200).type('text/plain')
      res.send('Таких данных не существует') 
    }
    if (req.params.id >=101 && req.params.id <=200)
    {
      res.status(200).type('text/plain')
    res.send('Ты зашел не на тот сайт')
    }
    if (req.params.id ==200)
    {
      res.status(200).type('text/plain')
    res.send('Такие данные есть но я их тебе не дам')
    }
  })


  
app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})