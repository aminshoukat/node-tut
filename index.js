const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// });
// app.get('/about', (req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// });
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/404.html`);
// });

app.set('view engine', 'ejs');

app.get('', (req, resp) => {
    const user = {
        "name": "Amin",
        "father": "Shoukat",
        "age": "30",
        "nationality": "Pakistani",
        "skills": ["HTML 5", "CSS 3", "JS", "jQuery", "PHP", "Node", "MYSQL"]
    }
    resp.render('home', {user} );
});

app.listen(5000);