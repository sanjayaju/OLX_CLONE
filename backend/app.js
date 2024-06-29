const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect(config.mongoURI);

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

module.exports = { app, server, io };