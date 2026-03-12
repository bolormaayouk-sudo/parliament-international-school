const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'parliament_demo_secret_2024';

const generateToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });

// ── Hardcoded demo users (always available, no DB needed) ──────────────────
const DEMO_USERS = [
  {
    _id: 'demo-student-001',
    name: 'James Blackwood',
    email: 'student@parliament-intl.edu',
    password: bcrypt.hashSync('demo1234', 10),
    role: 'student',
    studentId: 'STD-2024-001',
    grade: 'SS3',
    section: 'Science A',
    avatar: 'JB',
  },
  {
    _id: 'demo-parent-001',
    name: 'Margaret Thompson',
    email: 'parent@parliament-intl.edu',
    password: bcrypt.hashSync('demo1234', 10),
    role: 'parent',
    children: [
      { name: 'Ethan Thompson', grade: 'SS2', studentId: 'STD-2024-045' },
      { name: 'Lily Thompson', grade: 'JSS3', studentId: 'STD-2024-103' }
    ],
    avatar: 'MT',
  },
  {
    _id: 'demo-staff-001',
    name: 'Dr. Amelia Harrington',
    email: 'staff@parliament-intl.edu',
    password: bcrypt.hashSync('demo1234', 10),
    role: 'staff',
    department: 'Sciences',
    subject: 'Advanced Physics',
    employeeId: 'EMP-2019-007',
    avatar: 'AH',
  },
];

// Also keep old standrews emails working
const DEMO_USERS_LEGACY = [
  { ...DEMO_USERS[0], email: 'student@standrews.edu' },
  { ...DEMO_USERS[1], email: 'parent@standrews.edu' },
  { ...DEMO_USERS[2], email: 'staff@standrews.edu' },
];

const ALL_DEMO_USERS = [...DEMO_USERS, ...DEMO_USERS_LEGACY];

const findDemoUser = (email) => ALL_DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());

// Try to load Mongoose User model — gracefully fall back if DB not connected
let User = null;
try {
  User = require('../models/User');
} catch(e) {}

const isDbConnected = () => {
  try {
    const mongoose = require('mongoose');
    return mongoose.connection.readyState === 1;
  } catch(e) { return false; }
};

// ── POST /api/auth/login ───────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Always check demo users first
    const demoUser = findDemoUser(email);
    if (demoUser) {
      const isMatch = await bcrypt.compare(password, demoUser.password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
      const { password: _, ...userSafe } = demoUser;
      return res.json({ success: true, token: generateToken(demoUser._id), user: userSafe, mode: 'demo' });
    }

    // Fall back to DB if connected
    if (isDbConnected() && User) {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });
      const isMatch = await user.comparePassword(password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
      return res.json({ success: true, token: generateToken(user._id), user: user.toJSON() });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ── GET /api/auth/me ───────────────────────────────────────────────────────
router.get('/me', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check demo users
    const demoUser = ALL_DEMO_USERS.find(u => u._id === decoded.id);
    if (demoUser) {
      const { password: _, ...userSafe } = demoUser;
      return res.json({ success: true, user: userSafe });
    }

    res.status(401).json({ message: 'User not found' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// ── POST /api/auth/seed ────────────────────────────────────────────────────
router.post('/seed', async (req, res) => {
  if (isDbConnected() && User) {
    try {
      await User.deleteMany({});
      for (const u of DEMO_USERS) {
        const { password: plainPw, ...rest } = u;
        const user = new User({ ...rest, password: 'demo1234' });
        await user.save();
      }
      return res.json({ success: true, message: '✅ Demo users seeded to database', count: DEMO_USERS.length });
    } catch (e) {
      return res.status(500).json({ message: 'Seeding failed', error: e.message });
    }
  }
  // Demo mode — always works
  res.json({
    success: true,
    message: '✅ Demo mode active — no seeding needed! Login works with hardcoded credentials.',
    credentials: [
      { role: 'student', email: 'student@parliament-intl.edu', password: 'demo1234' },
      { role: 'parent',  email: 'parent@parliament-intl.edu',  password: 'demo1234' },
      { role: 'staff',   email: 'staff@parliament-intl.edu',   password: 'demo1234' },
    ]
  });
});

module.exports = router;
