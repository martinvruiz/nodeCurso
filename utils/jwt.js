import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const expiration = { expiresIn: "1h" };
  return jwt.sign(user, secretKey, expiration);
};

export const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error: error.message };
  }
};
