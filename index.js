const express = require('./express')
const routes = require('./server/routes')

const port = process.env.PORT || 3000;

const app = express();

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

