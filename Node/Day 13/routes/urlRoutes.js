let express=require('express');
const { createShortUrl, redirectUrl,getUrls } = require('../controllers/urlController');
let router=express.Router();

router.post('/',createShortUrl)
router.get('/all',getUrls)
router.get('/:shortId',redirectUrl);

module.exports=router;
