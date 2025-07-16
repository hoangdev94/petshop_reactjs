const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { Product } = require('../models');


// Middleware to parse JSON bodies
//Lấy danh sách sản phẩm
router.use(express.json());
router.get("/", async (req, res) => {
   const listofProducts = await Product.findAll();
   console.log("Danh sách sản phẩm:");
    res.json(listofProducts);
});
//Danh sách sản phẩm bán chạy
router.get('/top', async (req, res) => {
  try {
    const topProducts = await Product.findAll({ where: { isTop: true } });
    res.json(topProducts);
  } catch (err) {
    res.status(500).json({ error: 'Không lấy được' });
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
    const { name, price, discount, rating, stock, isTop, isNew, isOutOfStock } = req.body;

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newProduct = await Product.create({
      name,
      price,
      discount,
      rating,
      stock,
      image: imagePath,
      isTop: isTop === 'true',
      isNew: isNew === 'true',
      isOutOfStock: isOutOfStock === 'true',
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Thêm sản phẩm thất bại' });
  }
  
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Sản phẩm không tồn tại' });
    }
    await product.destroy();
    res.json({ message: 'Xóa thú sản phẩm thành công' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Xóa sản phẩm thất bại' });
  }
});
module.exports = router;