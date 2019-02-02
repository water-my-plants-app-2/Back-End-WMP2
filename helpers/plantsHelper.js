require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  protected
};

function protected(req, res, next) {
    
    const token = req.headers.authorization;
    console.log(req.headers);
  
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "Invalid token" });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "Please provide a token" });
    }
  }