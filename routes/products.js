const express = require('express');
const router = express.Router();

const {addMainImage, addMultipleImages,addOneImage, storeAddMainImage, storeAddMultipleImages, storeOneImage, detailMainImage, detailMultipleImages, detailOneImage} = require('../controllers/productsController');

/* /products */

router
  .get('/add-one-image', addOneImage)
  .get('/add-multiple-images', addMultipleImages)
  .get('/add-main-image', addMainImage)
  .post('/add-one-image',  storeOneImage)
  .post('/add-multiple-images', storeAddMultipleImages)
  .post('/add-main-image', storeAddMainImage)
  .get('/detail-one-image/:id', detailOneImage)
  .get('/detail-multiple-images/:id', detailMultipleImages)
  .get('/detail-main-image/:id', detailMainImage)

module.exports = router;
