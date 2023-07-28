const LightNovel = require('../models/lightNovel');

exports.getAllLightNovels = async (req, res) => {
  try {
    const lightNovels = await LightNovel.find();
    res.json(lightNovels);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getLightNovelById = async (req, res) => {
  const id = req.params.id;
  try {
    const novel = await LightNovel.findById(id);
    if (!novel) {
      res.status(404).json({ error: 'Light novel not found' });
    } else {
      res.json(novel);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createLightNovel = async (req, res) => {
  const customLightNovelData = req.body;
  const { publisher, releaseDate, ...restOfLightNovelData } = customLightNovelData;

  const lightNovelData = {
    ...restOfLightNovelData,
    publisher,
    releaseDate,
  };

  try {
    const novel = await LightNovel.create(lightNovelData);
    res.status(201).json(novel);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateLightNovel = async (req, res) => {
  const id = req.params.id;
  const novelData = req.body;
  try {
    const updatedNovel = await LightNovel.findByIdAndUpdate(id, novelData, { new: true });
    if (!updatedNovel) {
      res.status(404).json({ error: 'Light novel not found' });
    } else {
      res.json(updatedNovel);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteLightNovel = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedNovel = await LightNovel.findByIdAndRemove(id);
    if (!deletedNovel) {
      res.status(404).json({ error: 'Light novel not found' });
    } else {
      res.json(deletedNovel);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
