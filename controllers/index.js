const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

function myMiddleware(req, res, next) {
    res.send("<h1>Wrong Route!</h1>")
}

router.use(myMiddleware);

module.exports = router;