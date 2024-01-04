const express = require('express');
const router=express.Router();
const {
    getAllTask, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask
} = require('../controllers/task')

router.get('/',getAllTask)
router.post('/',createTask)
router.get('/:id',getTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports=router
