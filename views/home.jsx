const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <div>
              <h1>HOME</h1>
              <div>
                <img src="/images/campfire.jpg" alt="Campfire" className="Campfire" />
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </div>
      </Def>
    )
  }
  

module.exports = home