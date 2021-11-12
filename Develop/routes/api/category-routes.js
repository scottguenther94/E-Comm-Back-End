const router = require('express').Router();
//const { in } = require('sequelize/types/lib/operators');
const { Category, Product } = require('../../models');
//const { findAll } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [Product],
    
  }) 
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    res.status(500).json(err)
    console.log(err)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [Product],
  })
    .then(categoryData => res.json(categoryData))
    .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(categoryData => res.json(categoryData))
  .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => res.status(500).json(err))
});

module.exports = router;
