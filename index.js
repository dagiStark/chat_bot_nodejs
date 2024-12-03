const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});