const router = require('express').Router();
const blogPostRoutes = require('./blog-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/blogposts', blogPostRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
