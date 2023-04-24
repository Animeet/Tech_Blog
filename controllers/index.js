const router = require('express').Router();
const apiRoutes = require('./api');
const {BlogPost, User} = require("../models")

router.get("/test", async (req, res) => {
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

      
      const data = results.map(post => post.get({plain: true}))
      console.log(data)

    res.render("landing", {
        data,
        username: "John"
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