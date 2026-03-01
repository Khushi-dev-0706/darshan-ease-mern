exports.registerUser = (req, res) => {

  const { name, email, password } = req.body;

  res.json({
    message: "Register API working",
    user: { name, email }
  });

};


exports.loginUser = (req, res) => {

  const { email, password } = req.body;

  res.json({
    message: "Login API working",
    token: "dummy-jwt-token"
  });

};