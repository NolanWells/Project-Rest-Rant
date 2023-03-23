const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/mountain.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/seaside.jpg'
      }]
      
    res.render('places/index', {
        places: places,
    })
    //res.send('GET /places')
})
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router
