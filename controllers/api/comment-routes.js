const router = require('express').Router();
const { Comment, BlogPost, User } = require('../../models');

router.get('/', async (req, res) => {
    const results = await Comment.findAll({
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
    const results = await Comment.findByPk(req.params.id, {
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
    const results = await Comment.create(req.body)
    res.json(results);
  });
  
  
  router.put('/:id', async (req,res) => {
    const results = await Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(results);
  });
  
  
  router.delete('/:id', async (req, res) => {
    const results = await Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(results);
  });
  
  module.exports = router;