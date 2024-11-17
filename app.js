const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'photo1',
    description: 'this is photo 1',
  };
  res.send(photo);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
