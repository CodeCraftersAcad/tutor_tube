const mongoose = require('mongoose');

exports.connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tutorTube', {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(res => console.log("Connected to DB"))
    .catch(err => console.log("Something wrong with DB"));
}