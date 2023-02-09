const {readJSON} = require('../data')

module.exports = {
  home: (req, res) => {
    const productsOneImage = readJSON('productsOneImage.json');
    const productsMultipleImages = readJSON('productsMultipleImages.json')

    return res.render("home",{
      productsOneImage,
      productsMultipleImages
    });
  },
};
