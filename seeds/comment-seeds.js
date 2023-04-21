const { Comment } = require('../models')

const commentData = [
    {
        blog_id: '1',
        contents: 'Come on, its not even that great.',
        username: 'Zach_Barnes'
    },
    {
        blog_id: '2',
        contents: 'I cant believe you would make a blog post about creating a new blog post. Unbelieveable!',
        username: 'JohnSmith'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;