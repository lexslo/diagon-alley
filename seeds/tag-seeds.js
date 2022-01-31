const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'common',
  },
  {
    tag_name: 'semi-rare',
  },
  {
    tag_name: 'rare',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'student standard',
  },
  {
    tag_name: 'maple',
  },
  {
    tag_name: 'holly',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
