const router = require('express').Router()
const db = require('../models')
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.place_schema.findById(req.params.id)
        .then((place) => { res.render('places/show', { place }) })
        .catch((err) => {
            console.log(err)
            res.render('error404')
        })
})

router.put('/:id', (req, res) => {
  db.place_schema.findByIdAndUpdate(String(req.params.id), req.body)
  .then(() => { res.redirect(`/places/${req.params.id}`) })
  .catch((err) => {
      console.log(err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.place_schema.findByIdAndDelete(String(req.params.id))
  .then(() => { res.redirect('/places') })
  .catch((err) => {
      console.log(err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.place_schema.findById(req.params.id)
        .then((place) => { res.render('places/edit', { place }) })
        .catch((err) => {
            console.log(err)
            res.render('error404')
        }) 
})

// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

router.get('/', (req, res) => {
  db.place_schema.find()
        .then((places) => { res.render('places/index', { places }) })
        .catch((err) => {
            console.log(err)
            res.render('error404')
        })
})

router.post('/', (req, res) => {
  db.place_schema.create(req.body)
        .then(() => { res.redirect('/places') })
        .catch((err) => {
            res.render('error404')
        })
})

module.exports = router


module.exports = router
