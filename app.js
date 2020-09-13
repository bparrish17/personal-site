const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public', 'stylesheets')));
app.use(express.static(path.join(__dirname, 'public', 'assets')));
app.use(express.static(path.join(__dirname, 'public', 'js')));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})