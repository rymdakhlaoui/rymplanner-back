const express = require('express');
const {  test,  addTask, getTasks, getTaskById, deleteTask, editTask, doneTask } = require('../controllers/taskControllers');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.get('/test', test)
router.post('/addTask', isAuth, addTask)
router.get('/getTasks', getTasks)
router.get('/getTaskById/:id', getTaskById)
router.delete('/deleteTask/:id', deleteTask)
router.put('/editTask/:id', editTask)
router.put('/doneTask/:id', doneTask)

module.exports = router