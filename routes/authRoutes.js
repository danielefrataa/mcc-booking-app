import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// Test registration route
router.post('/test-register', (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Dummy validation
  if (!name || !email || !password || !role) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields (name, email, password, and role)'
    });
  }

  // Dummy response
  res.status(201).json({
    success: true,
    message: 'Test registration successful',
    data: {
      id: 'MCC-001',
      nama: name,
      email,
      role,
      createdAt: new Date().toISOString()
    }
  });
});

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

export default router; 