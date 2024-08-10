
const express = require('express')
var ejs = require('ejs');
const app = express()
const port = 3000

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/home', (req, res) => res.render('pages/home'))
app.get('/about', (req, res) => res.render('pages/about'))
app.get('/contact', (req, res) => res.render('pages/contact'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})