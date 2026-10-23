const jwt = require("jsonwebtoken");

// MIDDLEWARE - Verify JWT Token (Authentication)
const verifyToken = (req, res, next) => {
    console.log(req.headers.cookie)
  const token = req.headers.cookie.split("=")[1]; // Attempt to get the token from cookies
    console.log("The token is:", token); // Debugging log to check the token value
  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." }); // No token found
  }

  try {
    // Verify the token using the same secret key used during signing
    // The 'secret' should be stored securely, e.g., in environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace 'secret' with your actual secret key
    
console.log(decoded); // Debugging log to check the decoded token payload
    // Add the decoded payload (which includes user ID) to the request object
    // This makes user information available to subsequent route handlers
    req.user = decoded;
    next(); // Token is valid, proceed to the next middleware or route handler
  } catch (err) {
    // Token is invalid (e.g., expired, tampered)
    return res.status(403).json({ message: "Invalid Token." });
  }
};

module.exports = {verifyToken};