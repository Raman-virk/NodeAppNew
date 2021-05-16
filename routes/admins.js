const router = require('express').Router();
let AdminUser = require('../Models/Admin');

router.route('/getAdminUser').post((req,res)=>{
    const username = req.body.UserName;
    const password = req.body.Password;
    console.log('here');
    AdminUser.find({UserName:username, Password:password})
    .then((admins)=> res.send(admins))
    .catch(err => res.send('Error: '+err))
});

router.route('/addAdminUsers').post((req,res)=>{
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    const newAdminUser = new AdminUser({UserName,Password});
    newAdminUser.save()
 .then(() => res.send('Admin added'))
 .catch(err => res.send('Error: '+err))
});

module.exports = router;





