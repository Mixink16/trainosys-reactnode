const requestLogs = [];

const RATE_LIMIT = 100;
const TIME_FRAME = 60 * 1000;

function rateLimitingMiddleware(req, res, next) {
  const clientIp = req.ip;
  const currentTimestamp = Date.now();

  requestLogs.forEach((entry, index) => {
    if (currentTimestamp - entry.timestamp > TIME_FRAME) {
      requestLogs.splice(index, 1);
    }
  });

  const clientRequests = requestLogs.filter(entry => entry.ip === clientIp);

  if (clientRequests.length >= RATE_LIMIT) {
    return res.status(429).json({
      message: 'Too many requests, please try again later.'
    });
  }

  requestLogs.push({
    ip: clientIp,
    timestamp: currentTimestamp
  });

  next();
}

export default rateLimitingMiddleware;
