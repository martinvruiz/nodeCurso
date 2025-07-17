import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (error) => {
    if (error) {
      return res.sendStatus(403);
    }
    next();
  });
};
