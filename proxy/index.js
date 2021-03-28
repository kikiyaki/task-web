const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 3001;
const HOST = "localhost";
const API_SERVICE_URL = "http://34.118.36.99";

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
   res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Authorization
app.use('', (req, res, next) => {
   next();
});

// Proxy endpoints
app.use('', createProxyMiddleware({
   target: API_SERVICE_URL,
   changeOrigin: true,
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
   console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
