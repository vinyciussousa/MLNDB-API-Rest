const User = require('../models/user');
const LightNovel = require('../models/lightNovel');
const ReadingList = require('../models/readingList');

exports.createReadingList = async (req, res) => {
  const username = req.params.username;
  const listData = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      const readingListData = { user: user._id, ...listData };
      const readingList = await ReadingList.create(readingListData);
      res.status(201).json(readingList);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllReadingLists = async (req, res) => {
  try {
    const readingLists = await ReadingList.find().populate('user novels');
    res.json(readingLists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.insertLightNovelInsideReadingList = async (req, res) => {
  const readingListId = req.params.readingListId;
  const novelId = req.params.novelId;

  try {
    const readingList = await ReadingList.findById(readingListId);
    const novel = await LightNovel.findById(novelId);

    if (!readingList || !novel) {
      res.status(404).json({ error: 'Reading list or novel not found' });
      return;
    }

    readingList.novels.push(novel._id);
    await readingList.save();

    res.json({ message: 'Novel added to reading list', readingList });
  } 
  catch (error) {
    res.status(500).json({ error: 'Internal server error'});
  }
};

exports.getReadingListById = async (req, res) => {
  const id = req.params.listId;
  try {
    const readingList = await ReadingList.findById(id).populate('user novels');
    if (!readingList) {
      res.status(404).json({ error: 'Reading list not found' });
    } else {
      res.json(readingList);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
