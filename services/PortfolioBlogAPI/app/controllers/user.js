const controller = {}

controller.signup = (User) => (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username || !password) res.json({ success: false, message: 'Please, pass a username and password.' })
  else {
    const newUser = new User({
      username: username,
      password: password
    })

    newUser.save(error => {
      if (error) res.status(400).json({ success: false, message: 'Username already exists.' })

      res.json({ success: true, message: 'Account created successfully.' })
    })
  }
}

controller.setup = (User) => (req, res) => {
  const admin = new User({
    username: 'admin',
    password: 'admin',
    clients: []
  });
admin.save(error => {
    if (error) throw error;
console.log('Admin account was succesfully set up');
    res.json({ success: true });
  })
}

module.exports = controller
