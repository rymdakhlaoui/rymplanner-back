const express = require('express');

const app = express();

app.use(express.json());

require('dotenv').config();

const PORT = process.env.PORT || 7000;

app.listen(PORT, (error) => {
    error ? console.log(error)
    : console.log(`⚡⚡⚡ Server is running on http://127.0.0.1:${PORT}`);
})

const connectDB = require('./config/connectDB')

connectDB()



app.get('/', (req, res) => {
    res.send('Hello World')
})

// tasks routes
app.use('/api/tasks', require('./routes/taskRoutes'))

// Auth routes
app.use('/api/auth', require('./routes/authRoutes'))

// User routes
app.use('/api/users', require('./routes/userRoutes'))