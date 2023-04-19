const { User } = require('../models');

const UserData = [
    {
        username: 'Zach_Barnes',
        password: 'password123',
    },
    {
        username: 'JohnSmith',
        password: 'password123',
    }
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;