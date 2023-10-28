const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post('/signupUser', authController.signupUser);
router.post("/login", authController.login);
router.get('/logout', authController.logout);



// // i started here 

router.post('/registerAdminSelf', authController.protect, authController.restrictTo('admin'), userController.registerAdminSelf);
router.post('/register-team-member', authController.protect, authController.restrictTo('admin'), userController.registerTeamMember);
router.delete('/deleteUser/:id', authController.protect, authController.restrictTo('admin'), userController.deleteUser);

// //Ended here 


// Define the forgotPassword and resetPassword routes here
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);


router.patch('/updatePassword', authController.protect, authController.updatePassword);

  router.patch('/updateMe', authController.protect, userController.updateMe);
  router.delete('/deleteMe', authController.protect, userController.deleteMe);

router
.route("/")
.get(userController.getAllUsers)
.post(userController.createUser);

router
.route("/:id")
.get(userController.getUser)
.patch(userController.updateUser)
// .delete(userController.deleteUser);



module.exports = router;





