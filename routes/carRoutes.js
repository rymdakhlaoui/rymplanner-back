const express = require('express');
const { addCar, test, getCars, getCarById, deleteCar, editCar } = require('../controllers/carControllers');

const router = express.Router();

router.get('/test', test)
router.post('/addCar', addCar)
router.get('/getCars', getCars)
router.get('/getCarById/:id', getCarById)
router.delete('/deleteCar/:id', deleteCar)
router.put('/editCar/:id', editCar)

module.exports = router