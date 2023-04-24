const router = require('express').Router();
const { User, BlogPost } = require('../../models');

router.get('/', async (req, res) => {
    const results = await User.findAll({
      include: [
        {
          model: BlogPost,
          attributes: [
            "id",
            "username",
            "contents",
            "title"
          ]
        }
      ]
    })
  
  
    res.json(results)
  });
  
  
  router.get('/:id', async (req, res) => {
    const results = await User.findByPk(req.params.id, {
      include: [
        {
          model: BlogPost,
          attributes: [
            "username",
            "contents",
            "title"
          ]
        }
      ]
    })
    res.json(results);
  });
  
  // create user route
  // SIGNING UP
  // SESSIONS
  router.post('/', async (req, res) => {
    const results = await User.create(req.body)

    req.session.save(() => {
      req.session.user_id = results.id;
      req.session.logged_in = true;


      res.json(results);
    })

  });

// logging in
// req.body -> username and password
// does the username exist
// is the password matched with username
// create the session -> tokens

  router.post("/login", async (req, res) => {
    const results = await User.findOne({
      where: {
        username: req.body.username
      }
    })

    if(!results) {
      res.status(400).json({message: "User not found!"})
    }

    if(req.body.password !== results.password) {
      res.status(400).json({message: "Invalid username or password!"})
    }

    req.session.save(() => {
      req.session.user_id = results.id;
      req.session.logged_in = true;

      console.log("Logged in!")

      res.json(results);
    })

  })
  
  
  router.put('/:id', async (req,res) => {
    const results = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(results);
  });
  
  
  router.delete('/:id', async (req, res) => {
    const results = await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(results);
  });
  
  module.exports = router;