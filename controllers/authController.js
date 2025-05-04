import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
  const { tipe_user, nama, email, password } = req.body;

  // Check required fields
  const missingFields = [];
  if (!tipe_user) missingFields.push('tipe_user');
  if (!nama) missingFields.push('nama');
  if (!email) missingFields.push('email');
  if (!password) missingFields.push('password');

  if (missingFields.length > 0) {
    return res.status(400).json({ 
      success: false,
      message: 'Please provide all required fields',
      missingFields: missingFields,
      requiredFields: ['tipe_user', 'nama', 'email', 'password']
    });
  }

  // Validate tipe_user
  if (!['personal', 'instansi'].includes(tipe_user)) {
    return res.status(400).json({
      success: false,
      message: 'tipe_user must be either "personal" or "instansi"'
    });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ 
        success: false,
        message: 'Email is already registered.' 
      });
    }

    // Get the latest user to determine the next number
    const latestUser = await User.findOne({
      order: [['createdAt', 'DESC']]
    });

    let nextNumber = 1;
    if (latestUser) {
      // Extract number from latest user's ID
      const lastNumber = parseInt(latestUser.id.split('-')[1]);
      nextNumber = lastNumber + 1;
    }

    // Format number with leading zeros
    const formattedNumber = nextNumber.toString().padStart(3, '0');
    const userId = `MCC-${formattedNumber}`;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      id: userId,
      tipe_user,
      nama,
      email,
      password: hashedPassword,
      ...req.body // Include other optional fields
    });

    // Remove the password from the response
    const { password: _, ...userData } = newUser.toJSON();
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: userData
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to register user.',
      error: error.message 
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      success: false,
      message: 'Please provide email and password.' 
    });
  }

  try {
    console.log('Attempting login for email:', email);

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('User not found with email:', email);
      return res.status(401).json({ 
        success: false,
        message: 'Invalid email or password.' 
      });
    }

    console.log('User found:', { id: user.id, email: user.email, tipe_user: user.tipe_user });

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid email or password.' 
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not set in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error'
      });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'fallback-secret-key', {
      expiresIn: '1d',
    });

    res.status(200).json({ 
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user.id,
          tipe_user: user.tipe_user,
          nama: user.nama,
          email: user.email
        }
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to log in.',
      error: error.message 
    });
  }
};