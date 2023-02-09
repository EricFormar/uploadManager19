module.exports = {
    addOneImage : (req,res) => {
        return res.render('addOneImage')
    },
    storeOneImage : (req,res) => {
        return res.send(req.body)
    },
    detailOneImage : (req,res) => {
        return res.render('detailOneImage')
    },

    addMultipleImages : (req,res) => {
        return res.render('addMultipleImages')
    },
    storeAddMultipleImages : (req,res) => {
        return res.send(req.body)
    },
    detailMultipleImages : (req,res) => {
        return res.render('detailMultipleImages')
    },

    addMainImage : (req,res) => {
        return res.render('addMainImage')
    },
    storeAddMainImage : (req,res) => {
        return res.send(req.body)
    },
    detailMainImage : (req,res) => {
        return res.render('detailMainImage')
    },
   
}