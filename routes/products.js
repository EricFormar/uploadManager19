const express = require('express');
const router = express.Router();

const {addMainImage, addMultipleImages,addOneImage, storeAddMainImage, storeAddMultipleImages, storeOneImage, detailMainImage, detailMultipleImages, detailOneImage} = require('../controllers/productsController');

const {uploadImageProduct} = require('../middlewares/upload')

/* /products */

router
  .get('/add-one-image', addOneImage)
  .post('/add-one-image', uploadImageProduct.single('image'), storeOneImage)
  .get('/detail-one-image/:id', detailOneImage)

  .get('/add-multiple-images', addMultipleImages)
  .post('/add-multiple-images',uploadImageProduct.array('images'), storeAddMultipleImages)
  .get('/detail-multiple-images/:id', detailMultipleImages)

  .get('/add-main-image', addMainImage)
  .post('/add-main-image', uploadImageProduct.fields([{name:'mainImage'},{name:'images'}]), storeAddMainImage)
  .get('/detail-main-image/:id', detailMainImage)

module.exports = router;
