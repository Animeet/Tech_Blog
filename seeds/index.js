const seedBlogPost = require('./blogpost-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedBlogPost();
  console.log('\n----- CATEGORIES SEEDED -----\n');


  process.exit(0);
};

seedAll();
