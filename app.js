const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()
const port = 3000
const data = require('./text.js');

app.use(express.static(path.join(__dirname, 'public', 'stylesheets')));
app.use(express.static(path.join(__dirname, 'public', 'assets')));
app.use(express.static(path.join(__dirname, 'public', 'js')));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

app.get('/', (req, res) => {
  console.warn('data', data);
  res.render('index.html', data);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})