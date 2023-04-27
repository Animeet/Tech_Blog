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
    console.log('Posting')
    console.log(req.body)
    const results = await Comment.create({
      contents: req.body.content,
      username: req.session.username,
      blog_id: req.body.blogPostId
    })

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