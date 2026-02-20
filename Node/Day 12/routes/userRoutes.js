let express=require('express');
const { showUsers, addUser,showAddForm } = require('../controllers/UserController');
let router=express.Router();

router.get('/users',showUsers);

router.get('/add',showAddForm)

router.post('/users',addUser);



module.exports=router;