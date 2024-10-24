const jwt = require("jsonwebtoken");
const User = require("../models/user");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    console.log("Authorization Header:", req.headers["authorization"]);

    if (!token) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Not authorized 1 token not found " }] });
    }

    // Check if the token starts with "Bearer"
    const bearer = token.split(" ");
    const bearerToken = bearer[1] || bearer[0]; // Use the second part or the first if there's no split

    if (!bearerToken) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Not authorized 1 token not found bearer " }] });
    }

    const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
    const foundUser = await User.findOne({ _id: decoded.id });

    if (!foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Not authorized 2 user not found " }] });
    }

    req.user = foundUser;

    next();
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "Not authorized 3 !!!" }] });
  }
};
module.exports = isAuth;
