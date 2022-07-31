const express = require("express");
const router = express.Router();

router.get("/login", (req,res) => {
    res.status(200).json({ message: 'login page' })
})

router.post("/login", (req,res) => {
    res.status(200).json({message: 'set login'})
})


module.exports=router