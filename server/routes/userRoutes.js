const express = require('express');
const { registerUser, loginUser } = require('../controller/userController');
const { protect } = require('../controller/userMiddleware');
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);

// Example of a protected route
router.get('/protected', protect, (req, res) => {
    res.json({ message: 'Access granted to protected route', user: req.user });
});

module.exports = router;