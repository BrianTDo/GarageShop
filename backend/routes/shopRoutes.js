const express =require('express')
const router = express.Router()
const {getShops, setShop, updateShop, deleteShop} = require('../controllers/shopController')

router.route('/').get(getShops).post(setShop)
router.route('/:id').delete(deleteShop).put(updateShop)

module.exports = router