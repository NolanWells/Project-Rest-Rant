// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/h-thai-ml-tables.jpg'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/coffee-cat.jpg'
// }]


const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default:'https://cdn.dribbble.com/users/844846/screenshots/2855815/media/1bf0a2eb21537488818c8ff5de1dd845.jpg?compress=1&resize=400x300'},
    cuisines: { type: String, require: true },
    city: { type: String, default: 'Anytown' },
    state: {type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old!'],
        max: [new Date().getFullYear(), 'Hey, this is in the future!']
    },
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
  }
  

module.exports = mongoose.model('Places', placeSchema)