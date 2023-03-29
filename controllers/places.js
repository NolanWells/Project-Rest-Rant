const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


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


module.exports = router
