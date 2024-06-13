const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  const list = [
    {
      id: 1,
      firstName: 'Sherif',
      lastName: 'Adams',
      age: 25
    }, {
      id: 2,
      firstName: 'Joy',
      lastName: 'Amoka',
      age: 18
    }, {
      id: 3,
      firstName: 'Marvel',
      lastName: 'Solo',
      age: 38
    }
  ]
  res
    .status(200)
    .json(list)
})

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  res
    .status(200)
    .json({
      id: Number(req.params.id),
      firstName: 'Sherif',
      lastName: 'Adams',
      age: 25
    })
})
module.exports = router
