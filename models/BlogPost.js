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
            model: 'user',
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
    freezeTableName: true
    // timestamps: true
});

module.exports = BlogPost;