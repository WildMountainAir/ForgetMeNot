const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.static('../client/dist'));

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});

// Serve this file from the root of your website:
// http://localhost:3000/service-worker.js
