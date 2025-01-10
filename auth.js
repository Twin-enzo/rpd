const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
app.use(express.json());

// Mock User Database
const users = [
  { id: 1, username: 'admin', password: '$2a$10$ECRfzfDg68VntBykm7P2w9pc.eT2uG9WqqvbO90u7gUNpM.0G57X2', role: 'admin' }, // password: admin123
  { id: 2, username: 'staff', password: '$2a$10$3hsYqmcUrVeGYNqg/fc.Hho5h/bTEm6IjKseQlhBXw1xDjlQI3Li6', role: 'staff' }, // password: staff123
  { id: 3, username: 'customer', password: '$2a$10$S1vZ61JtIZ8Wx4Hn0ON0LuOH9FzJg5k5jc4KHOw.k8Nw73Dlv1nyq', role: 'customer' } // password: customer123
];

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user) return res.status(400).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ id: user.id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });
  res.json({ token });
});

// Middleware for verifying JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied');

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
};

app.listen(3000, () => console.log('Server running on port 3000'));
