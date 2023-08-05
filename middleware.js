module.exports = requrestFilter = (req, resp, next) => {

    if(!req.query.age) {
        resp.send('Please provide your age.');
    }
    else if(req.query.age < 10) {
        resp.send('You are not allowed to access this page.');
    } else {
        next();
    }

}