const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    contents: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        references: {
            model: 'users',
            key: 'username'
        }
    },
    created_on: {
        type: DataTypes.DATE,
        defaultValue: () => {
            return Date.now();
        }
    }
}, {
    sequelize: db,
    modelName: 'blogPost',
    // timestamps: true
});

module.exports = BlogPost;