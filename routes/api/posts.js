const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');


/*--------protected Routes ---*/
router.use(require('../../config/auth'));
router.get('/', postsCtrl.index);
router.post('/posts', postsCtrl.create);
// use checkAuth to Post or Routes

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;
