const express = require('express');
const router = express.Router();

const { getQueens, getQueensByID } = require('../endpoints');

router.get('/', getQueens);
router.get('/:queenId', getQueensByID);

module.exports = router;
