const AdminLogModel = require("../models/AdminLogModel");

const logIP = async (req, res, next) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const username = req.body.username || 'unknown'; // Varsayılan olarak 'unknown' kullanıyoruz, eğer kullanıcı adı sağlanmazsa

  const adminLog = new AdminLogModel({ username, ipAddress });
  try {
    await adminLog.save();
    console.log("IP Address logged successfully.");
  } catch (err) {
    console.error("Error logging IP address:", err);
  }

  next();
};

module.exports = logIP;
