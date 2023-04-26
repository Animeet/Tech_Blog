const router = require('express').Router();
const apiRoutes = require('./api');
const { BlogPost, User } = require("../models")

router.get("/", async (req, res) => {
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

  const data = results.map(post => post.get({ plain: true }))
  console.log(req.session.user_id)
  if (req.session.user_id) {
    const user = await User.findOne({
      where: {
        id: req.session.user_id
      },
      attributes: ['username']
    });

    return res.render('landing', {
      data,
      logged_in: true,
      user
    });
  }

  res.render("landing", {
    data,
  })
})


router.get("/signup", (req, res) => {
  res.render("signup")
})


router.get("/login", (req, res) => {
  res.render("login")
})


router.use('/api', apiRoutes);

function myMiddleware(req, res, next) {
  res.send("<h1>Wrong Route!</h1>")
}

router.use(myMiddleware);

module.exports = router;