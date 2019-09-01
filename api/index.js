const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
require('./routes/userRoutes')(app);
app.get('/', (req, res) => {
  res.send(`
    <div>
      <h4>Hi!  Welcome to the React SSR API</h4>
      <div>
        You can see <a href="/users">the Users route</a>
      </div>
      <div>
        Visit <a href="/admins">the Admins route</a>
      </div>
    </div>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // So we can see a message whilst it bundles
  console.log(`now running on port: ${PORT}\n`);
});

