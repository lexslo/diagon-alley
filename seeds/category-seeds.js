const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Robes',
  },
  {
    category_name: 'Apothecary',
  },
  {
    category_name: 'Wands',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Books',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
