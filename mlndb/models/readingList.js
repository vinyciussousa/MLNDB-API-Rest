const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  listName: String,
  novels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LightNovel',
    },
  ],
});

const ReadingList = mongoose.model('ReadingList', readingListSchema);

module.exports = ReadingList;
