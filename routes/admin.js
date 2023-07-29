var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController')

const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/admin/product-Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

const upload = multer({ storage: fileStorageEngine })
/* GET users listing. */
router.get('/login', adminController.adminLogin)
router.post('/login', adminController.adminPostLogin)


router.get('/', adminController.adminHomePage)


/* For Product */
router.get('/add-product', adminController.adminAddProduct)
router.post('/add-product', upload.array('Image', 1),  adminController.adminPostProduct)
router.get('/all-product', adminController.adminGetAllProduct)
router.get('/product-View-More/:id',  adminController.adminProductViewMore)
router.get('/delete-product/:id',  adminController.adminDeleteProduct)
router.get('/edit-product/:id',  adminController.adminEditProduct)
router.post('/edit-product/:id', upload.array('Image', 3),  adminController.adminPostEdit)


router.get('/user-list', adminController.adminUserList)


/* For Add-Category */
router.get('/category',  adminController.adminCategory)
router.post('/category',  adminController.adminPostCategory)

router.get('/logout', adminController.logout)




module.exports = router;
