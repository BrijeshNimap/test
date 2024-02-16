const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Testing Server for SSH Tunnel');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
