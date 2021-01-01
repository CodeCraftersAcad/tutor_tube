require('dotenv').config();
const express = require('express'),
  app = express(),
  cors = require('cors'),
  { connectDB } = require('./config/connectDB'),
  PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// require routes
const homeRoutes = require('./routes/home-routes');

// use routes
app.use("/api", homeRoutes);

app.listen(PORT, () => {
  console.log('http://locahost:3001')
})