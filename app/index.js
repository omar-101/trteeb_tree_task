// server.js
const { createServer } = require('http'),
  { parse } = require('url'),
  next = require('next'),
  httpProxy = require('http-proxy'),
  dev = process.env.NODE_ENV !== 'production',
  app = next({ dev }),
  handle = app.getRequestHandler(),
  //proxy = httpProxy.createProxyServer({ ws: true, xfwd: true }),
  config = require('./next.config');

app.prepare().then(() => {
  // prepare server
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    // else let next.js app handle the request
    handle(req, res, parsedUrl);

    // listen at port from next.config js file
  }).listen(config.env.port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${config.env.port}`);
  });
});
