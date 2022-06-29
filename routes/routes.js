const router = require('express').Router();
const { data, singleData, addData, singleUpdate, deleteSigleData, addAdmin, getAdmin,postUserSelectedCourse ,getUserSelectedCourse,deleteUserSelectedSingleCourse,deleteUserSelectedCourseByEmail} = require('../controllers/controllers');


// data

router.route("/data")
    .get(data)
    .post(addData)

// sigle data

router.route("/data/:id")
    .get(singleData)
    .put(singleUpdate)
    .delete(deleteSigleData)

// make admin

router.route("/adminData")
    .post(addAdmin)
    .get(getAdmin)

//  user clecked course 

router.route("/userSelectedCourse")
    .post(postUserSelectedCourse)
    .get(getUserSelectedCourse)


router.route("/userSelectedCourse/:id")
    .delete(deleteUserSelectedSingleCourse)
router.route("/userSelectedCourse/user/:email")
    .delete(deleteUserSelectedCourseByEmail)


module.exports = router;