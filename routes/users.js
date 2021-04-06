const router = require('express').Router();
let User = require('../Models/User');



router.route('/addUser').post((req,res)=>{
    console.log('in adding user');
    const FullName= req.body.FullName;
    const MemberID = req.body.MemberID;
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    const newUser = new User({FullName,MemberID,UserName,Password});
console.log('when user is added');
 newUser.save()
 .then(() => res.send('Account Created! Please login with these credentials!'))
 .catch(err => res.send('Error: '+err))
});

router.route('/getUserName').post((req,res)=>{
    const username = req.body.username;
    console.log('here');
    User.find({UserName:username})
    .then((users)=> res.send(users))
    .catch(err => res.send('Error: '+err))
});

router.route('/getMemberID').post((req,res)=>{
    const memberID = req.body.memberID;
    console.log('here');
    User.find({MemberID:memberID})
    .then((users)=> res.send(users))
    .catch(err => res.send('Error: '+err))
});

router.route('/getFullName').post((req,res)=>{
    const fullname = req.body.fullname;
    console.log('here');
    User.find({FullName:fullname})
    .then((users)=> res.send(users))
    .catch(err => res.send('Error: '+err))
});

router.route('/getUser').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log('here');
    User.find({UserName:username, Password:password})
    .then((users)=> res.send(users))
    .catch(err => res.send('Error: '+err))
});

router.route('/changePassword').post((req,res)=>{
    const fullname = req.body.fullname;
    const memberID = req.body.memberID;
    console.log('here');
    User.find({FullName:fullname, MemberID:memberID})
    .then((users)=> res.send(users))
    .catch(err => res.send('Error: '+err))
});

router.route('/updatePassword').post((req,res)=>{
    const id = req.body.id;
    User.findById(id)
    .then(user => {
        user.Password = req.body.newpassword;
        user.UserName = req.body.newusername;
        user.save()
        .then(()=> res.json('User  updated'))
        .catch(err => res.send('Error: '+err))
    })
});



module.exports = router;