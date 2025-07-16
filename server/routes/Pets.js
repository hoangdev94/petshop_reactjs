const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { Pet } = require('../models');


// Middleware to parse JSON bodies
//lấy danh sách thú cưng
router.use(express.json());
router.get("/", async (req, res) => {
   const listofPets = await Pet.findAll();
    res.json(listofPets);
});
//Danh sách thú cưng bán chạy
router.get('/top', async (req, res) => {
  try {
    const topPets = await Pet.findAll({ where: { isTop: true } });
    res.json(topPets);
  } catch (err) {
    res.status(500).json({ error: 'Không lấy được thú cưng bán chạy' });
  }
});
router.get('/newpets', async (req, res) => {
  try {
    const newPets = await Pet.findAll({ where: { isNew: true } });
    res.json(newPets);
  } catch (err) {
    res.status(500).json({ error: 'Không lấy được thú cưng bán chạy' });
  }
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // thư mục ảnh
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});
const upload = multer({ storage });

router.post("/", upload.single('image'), async (req, res) => {
  try {
    const { name,sex, price, discount, rating, stock, isTop, isNew, isOutOfStock } = req.body;

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const pet = await Pet.create({
      name,
      sex,
      price,
      discount,
      rating,
      stock,
      image: imagePath,
      isTop: isTop === 'true',
      isNew: isNew === 'true',
      isOutOfStock: isOutOfStock === 'true',
    });
    res.status(201).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Thêm thú cưng thất bại' });
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findByPk(id);
    if (!pet) {
      return res.status(404).json({ error: 'Thú cưng không tồn tại' });
    }
    await pet.destroy();
    res.json({ message: 'Xóa thú cưng thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Xóa thú cưng thất bại' });
  }
});
module.exports = router;