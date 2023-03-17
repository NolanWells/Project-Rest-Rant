const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <div>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </div>
      </Def>
    )
  }
  

module.exports = error404
