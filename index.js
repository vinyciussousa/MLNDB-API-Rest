const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://lightnoveldbadmin:lightnoveldbtest@lightnoveldb.qcty3kf.mongodb.net/lightnovel_node?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const userRoutes = require('./mlndb/routes/userRoutes');
app.use(userRoutes)

const lightNovelRoutes = require('./mlndb/routes/lightNovelRoutes');
app.use(lightNovelRoutes);

const readingListRoutes = require('./mlndb/routes/readingListRoutes');
app.use(readingListRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
