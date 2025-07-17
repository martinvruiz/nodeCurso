import { generateToken } from "../utils/jwt.js";

const default_user = {
  email: process.env.DEFAULT_USER,
  password: process.env.DEFAULT_PASSWORD,
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (email === default_user.email && password === default_user.password) {
    const token = generateToken(default_user);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};

export default { login };
