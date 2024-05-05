var express = require('express');
var router = express.Router();

const TeacherModel = require('../routes/users');


router.post('/create', async function (req, res) {
  // res.render('index', { title: 'Express' });
  try {
    console.log(req.body);
    let user = new TeacherModel(req.body);
    let result = await user.save();
    res.send({ success: true, data: result })
  } catch (error) {
    res.send({ success: false, error: error })

  }
});






router.get('/', async (req, res) => {


  // const result = await TeacherModel.aggregate(
  //   [
  //     {
  //       $group:{_id:"$age",names:{$push:"$name"}}
  //     }
  //   ]
  // );



//  const result = await TeacherModel.aggregate(
//     [
//       {
//         $group:{_id:"$age",poora_detail:{$push:"$$ROOT"}}
//       }
//     ]
//   );



//  const result = await TeacherModel.aggregate(
//     [
//       {
//         $match:{gender:"Male"}
//       },
//       {
//         $group:{_id:"$age",number:{$sum:1}},
//       }
//     ]
//   );





// const result = await TeacherModel.aggregate(
//   [
//     {
//       $match:{gender:"Male"}
//     },
//     {
//       $group:{_id:"$age",number:{$sum:1}},
//     },
//     {
//       $sort:{number:-1},
//     }
//   ]
// );








const result = await TeacherModel.aggregate(
  [
    {
      $match:{gender:"Male"}
    },
    {
      $group:{_id:"$age",number:{$sum:1}},
    },
    {
      $sort:{number:-1},
    }
  ]
);











  res.send({data:result});
});




module.exports = router;
