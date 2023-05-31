// purpose: this file will be used to collect the packaged group of API endpoints and prefix them with the path /api.


const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction,
    // deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId/reactions').post(postReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// // /api/thoughts/:thoughtId/reactions
// router
//     .route('/:thoughtId/reactions')
//     .post(addReaction)
//     .delete(deleteReaction)

module.exports = router;


