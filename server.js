const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


// routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
// Catch all
app.use((req,res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});