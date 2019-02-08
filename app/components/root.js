import React from 'react'
import AllCandies from './AllCandies'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <p>(My name is Root, and I'm the mother component)</p>
          <Switch>
            <Route exact path='/candies' component={AllCandies} />
            <Route component={AllCandies} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default Root
