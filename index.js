const express = require('express');
const app = express();


const requrestFilter = (req, resp, next) => {

    if(!req.query.age) {
        resp.send('Please provide your age.');
    }
    else if(req.query.age < 10) {
        resp.send('You are not allowed to access this page.');
    } else {
        next();
    }

}

app.use(requrestFilter);

app.get('/', (req, resp) => {
    resp.send('Welcome to Home Page');
});

app.get('/about', (req, resp) => {
    resp.send('Welcome to Contact Page');
});

app.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact Page');
});


app.listen(5000);