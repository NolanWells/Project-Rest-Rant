const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index')
    //res.send('GET /places')
})

module.exports = router
