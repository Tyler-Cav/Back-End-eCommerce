const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(allCategoryData)
  } catch (error) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CatID = await Category.findOne(
    { include: [{model: Product}],
      where: {
        id: req.params.id
      },
    }
  ) 
  res.status(200).json(CatID)
} catch (error) {
  res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const createCat = await Category.create(
      {
        category_name: req.body.category_name
      }
    ) 
    res.json(createCat)
  } catch (error) {
      res.status(500).json('err')
    }
  });

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(
    { 
      category_name: req.body.category_name
    },
    { 
      where: {
        id: req.params.id
      },
    }
  ) 
  res.status(200).json(updateCat)
} catch (error) {
  res.status(500).json(err)
  }
});
//*ISSUE WHERE SYNTAX LOOKS CORRECT BUT ERRORS OUT
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    try {
      const deleteCat = await Category.destroy({ 
        where: {
          id: req.params.id
        }
    }) 
    console.error(error)
  } catch (error) {
    res.status(500).json("err")
    }
});

module.exports = router;
