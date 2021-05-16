const router = require('express').Router();
let Detail = require('../Models/Detail');



router.route('/addDetail').post((req,res)=>{
    console.log('in adding detail');
    const Name= req.body.Name;
    const Value = req.body.Value;
    const newDetail = new Detail({Name,Value});
console.log('when detail is added');
newDetail.save()
 .then(() => res.send('Detail added!'))
 .catch(err => res.send('Error: '+err))
});

router.route('/getDetail').post((req,res)=>{
    console.log('in getting');
    const Name = req.body.Name;
    console.log('here');
    Detail.find({Name:Name})
    .then((details)=> res.send(details))
    .catch(err => res.send('Error: '+err))
});

router.route('/updateDetail').post((req,res)=>{
    const Name= req.body.Name;
    const Value = req.body.Value;
    Detail.find({Name:Name})
    .then((details)=>{
        if(details.length>0){
     let id = details[0].id;
     Detail.findById(id)
    .then(detail => {
        detail.Name = Name;
        detail.Value = Value;
        detail.save()
        .then(()=> res.json('Detail  updated'))
        .catch(err => res.send('Error: '+err))
    })
        }else{
            const newDetail = new Detail({Name,Value});
            console.log('when detail is added');
            newDetail.save()
             .then(() => res.send('Detail added!'))
             .catch(err => res.send('Error: '+err))   
        }
    });
});


module.exports = router;