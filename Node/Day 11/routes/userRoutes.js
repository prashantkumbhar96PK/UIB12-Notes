let express=require('express');
const { showUsers, addUser } = require('../controllers/UserController');
let router=express.Router();

router.get('/users',showUsers);

router.post('/users',addUser);

module.exports=router;