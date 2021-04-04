const router = require('express').Router();
let Review = require('../Models/Review');



router.route('/addReview').post((req,res)=>{
    console.log('in adding review');
    const Logo= req.body.Logo;
    const Location = req.body.Location;
    const Light = req.body.Light;
    const Reason = req.body.Reason;
    const Username = req.body.Username;
    const newReview = new Review({Logo,Location,Light,Reason,Username});
console.log('when review is added');
newReview.save()
 .then(() => res.send('Review added!'))
 .catch(err => res.send('Error: '+err))
});

router.route('/getReview').post((req,res)=>{
    console.log('in getting');
    const logo = req.body.logo;
    console.log('here');
    Review.find({Logo:logo})
    .then((reviews)=> res.send(reviews))
    .catch(err => res.send('Error: '+err))
});





module.exports = router;