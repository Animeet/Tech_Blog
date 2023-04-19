const { BlogPost } = require('../models');

const blogPostData = [
    {
        title: 'Great Blog Post',
        contents: 'This is a really great blog post',
        username: 'Zach_Barnes'
    },
    {
        title: 'Wow, Blog Post',
        contents: 'This is another really cool blog post',
        username: 'JohnSmith'
    }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;