const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');


router.get('/', async (req, res) => {
  const results = await BlogPost.findAll({
    include: [
      {
        model: User,
        attributes: [
          "username"
        ]
      }
    ]
  })


  res.json(results)
});


router.get('/:id', async (req, res) => {
  const results = await BlogPost.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: [
          "username"
        ]
      }
    ]
  })
  res.json(results);
});


router.post('/', async (req, res) => {
  const results = await BlogPost.create(req.body)
  res.json(results);
});


router.put('/:id', async (req,res) => {
  const results = await BlogPost.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json(results);
});


router.delete('/:id', async (req, res) => {
  const results = await BlogPost.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(results);
});

module.exports = router;