const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <div>
              <h1>HOME</h1>
              <button className="btn-primary">Places Page</button>
          </div>
      </Def>
    )
  }
  

module.exports = home