const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// 中间件
app.use(bodyParser.json());
app.use(cors());

// 简单的API端点
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
