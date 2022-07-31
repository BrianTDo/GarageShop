const asyncHandler = require('expres-async-handler')

// @desc Get shops
// @route GET /api/shops
// @access Private
const getShops = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Shops'})
})

// @desc Set shop
// @route POST /api/shops
// @access Private
const setShop = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set Shop'})
})

// @desc Update shop
// @route PUT /api/shops/:id
// @access Private
const updateShop = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Shop ${req.params.id}`})
})

// @desc Delete shops
// @route DELETE /api/shops/:id
// @access Private
const deleteShop = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Shop ${req.params.id}`})
})

module.exports = {
    getShops,
    setShop,
    updateShop,
    deleteShop,
}