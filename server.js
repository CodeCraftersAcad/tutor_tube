const { urlencoded } = require('express');

const express = require('express'),
  app = express(),
  cors = require('cors'),
  { connectDB } = require('./config/connectDB'),
  PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('http://locahost:3001')
})