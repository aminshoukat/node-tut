const express = require('express');
const app = express();

app.get('', (req, resp) => {
    resp.send('This is homepage.');
});
app.get('/about-us', (req, resp) => {
    resp.send('This is about us page.');
});

app.listen(5000);