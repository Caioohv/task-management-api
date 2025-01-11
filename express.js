module.exports = () => {
  const express = require('express');
  const morgan = require('morgan')
  
  require('dotenv').config();
  
  const app = express();
  
  morgan.token('statusColor', (req, res, args) => {
    var status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent)
      ? res.statusCode
      : undefined
  
    var color = status >= 500 ? 31 // red
      : status >= 400 ? 33 // yellow
        : status >= 300 ? 36 // cyan
          : status >= 200 ? 32 // green
            : 0 // no color
  
    return '\x1b[' + color + 'm' + status + '\x1b[0m'
  })
  
  app.use(morgan('\x1b[33m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor :response-time ms'))

  return app;
}




