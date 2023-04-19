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