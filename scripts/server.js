// Simple Express server setup to serve the build output
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './dist';

app.use(express.static(DIST_DIR));

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
            connectSrc: ['*.google-analytics.com', 'www.googleapis.com', '*.googleapis.com', 'https://*' ],
            imgSrc: ["'self'", '*.google-analytics.com']
        },
        reportOnly: true,
    })
);



app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);

console.log( 'https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=harry');
