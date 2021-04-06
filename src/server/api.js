// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});


app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrcElem: [
                "'self'",
                "'unsafe-inline'",
                '*.googletagmanager.com',
                 '*.googleapis.com',               
                '*.google-analytics.com'
            ],
            styleSrc: ["'self'", "'unsafe-inline'", '*.googleapis.com'],
            connectSrc: ['*.google-analytics.com', 'www.googleapis.com', '*.googleapis.com'],
            imgSrc: ["'self'", '*.google-analytics.com']
        }
    })
);

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
