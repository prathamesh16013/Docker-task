const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from Node.js & Docker!</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

