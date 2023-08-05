const express = require('express');
const requrestFilter = require('./middleware');
const route = express.Router();
const app = express();


// app.use(requrestFilter);

route.use(requrestFilter);

app.get('/', (req, resp) => {
    resp.send('Welcome to Home Page');
});

route.get('/about', (req, resp) => {
    resp.send('Welcome to About Page');
});

route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact Page');
});

app.get('/faq', requrestFilter, (req, resp) => {
    resp.send('Welcome to FAQ Page');
});

app.use('/', route);


app.listen(5000);