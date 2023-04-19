const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogPostRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');

router.use('/blogposts', blogPostRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
