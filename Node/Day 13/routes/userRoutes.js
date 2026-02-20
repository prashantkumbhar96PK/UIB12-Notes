let express=require('express');
const { createUser, getAllUsers } = require('../controllers/userController');
let router=express.Router();


router.post('/',createUser)
router.get('/',getAllUsers)

module.exports=router;