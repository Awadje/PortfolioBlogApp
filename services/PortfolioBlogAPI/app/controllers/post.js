const controller = {}

controller.store = (User, Post, Token) => (req, res, error) => {
  if(Token) {
    const post = new Post({
      user_id: req.body.user_id,
      title: req.body.title,
      content: req.body.content,
      imgUrl: req.body.imgUrl,
      flex: req.body.flex
    })
    post.save(error => {
      if (error) return res.status(400).json(error)
      res.status(200).json({ success: true, message: 'Post Saved successfully.' })
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized.' })
}



controller.getAll = (User, Post, Token) => (req, res) => {
  if (Token) {
    Post.find({ user_id: req.query.user_id }, (error, post) => {
      if (error) return res.status(400).json(error)

      res.status(200).json(post)

      return true
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized.' })
}

controller.getAllFromPost = (User, Post, Token) => (req, res) => {
  if (Token) {
    Post.find({ post_id: req.query.post_id }, (error, post) => {
      if (error) return res.status(400).json(error)

      res.status(200).json(post)

      return true
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized.' })
}

module.exports = controller
