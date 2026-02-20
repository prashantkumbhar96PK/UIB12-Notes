let express=require('express');
let router=express.Router();
let {register,login}=require('../controllers/authController')

router.post('/register',register);
router.post('/login',login);

module.exports=router;