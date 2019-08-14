const multer = require('multer')

const diskStorageToUploads = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
  }
})

const saveToUploads = multer({ storage: diskStorageToUploads })

module.exports = {
  saveToUploads: saveToUploads.single('file')
}
