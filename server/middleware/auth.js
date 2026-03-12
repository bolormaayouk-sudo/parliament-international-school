const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'parliament_demo_secret_2024';

const DEMO_USERS = [
  { _id: 'demo-student-001', name: 'James Blackwood', email: 'student@parliament-intl.edu', role: 'student', studentId: 'STD-2024-001', grade: 'SS3' },
  { _id: 'demo-parent-001',  name: 'Margaret Thompson', email: 'parent@parliament-intl.edu', role: 'parent' },
  { _id: 'demo-staff-001',   name: 'Dr. Amelia Harrington', email: 'staff@parliament-intl.edu', role: 'staff', employeeId: 'EMP-2019-007' },
  { _id: 'demo-student-001', name: 'James Blackwood', email: 'student@standrews.edu', role: 'student', studentId: 'STD-2024-001' },
  { _id: 'demo-parent-001',  name: 'Margaret Thompson', email: 'parent@standrews.edu', role: 'parent' },
  { _id: 'demo-staff-001',   name: 'Dr. Amelia Harrington', email: 'staff@standrews.edu', role: 'staff' },
];

const isDbConnected = () => {
  try { const m = require('mongoose'); return m.connection.readyState === 1; } catch(e) { return false; }
};

exports.protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check demo users
    const demoUser = DEMO_USERS.find(u => u._id === decoded.id);
    if (demoUser) { req.user = demoUser; return next(); }

    // Try DB
    if (isDbConnected()) {
      const User = require('../models/User');
      const user = await User.findById(decoded.id).select('-password');
      if (user) { req.user = user; return next(); }
    }

    res.status(401).json({ message: 'Not authorized' });
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

exports.authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: `Role '${req.user.role}' not authorized` });
  }
  next();
};
