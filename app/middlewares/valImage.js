const path = require('path')

const valImage = (req, res, next) => {
    if (!req.files) return res.status(400).send('No file was uploaded')
    const {image} = req.files
    const validExtensions = ['.jpg', '.png', '.gif'];
    if (!validExtensions.includes(path.extname(image.name))) return res.status(400).send('Not valid image type');
    if (!/^image/.test(image.mimetype)) return res.status(400).send('Error. Not an image')
    next()
}

module.exports = valImage
