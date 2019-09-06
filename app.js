const express = require('express');
const app = express();


app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

app.get('/', (request, response, next) => {
  response.render('home');
});
app.get('/attend', (request, response, next) => {
  response.render('times');
});

app.get('/roast', (request, response, next) => {
  response.render('about');
});
