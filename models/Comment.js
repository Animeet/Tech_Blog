const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Comment extends Model {}

Comment.init({
    blog_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'blogPost',
            key: 'id'
        }
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
    modelName: 'comment',
    freezeTableName: true
    // timestamps: true
});

module.exports = Comment;