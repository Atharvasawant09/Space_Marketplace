const adminAuth = (req, res, next) => {
  const adminKey = req.headers['x-admin-key']; // Should match frontend
  
  if (adminKey === 'admin-secret-key') {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Unauthorized access' });
  }
};

module.exports = adminAuth;
