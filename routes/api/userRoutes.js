// // Import the required modules and functions
// const router = require('express').Router();
// const {
//   getAllUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
//   addFriend,
//   deleteFriend
// } = require('../../controllers/userController');

// // Define the routes
// router.route('/').get(getAllUsers).post(createUser);

// router
//   .route('/:id')
//   .get(getUserById) 
//   .put(updateUser)
//   .delete(deleteUser);

// router
//   .route('/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(deleteFriend);


// module.exports = router;



const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');


// /api/users
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)
module.exports = router;