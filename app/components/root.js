import React from 'react'
import AllCandies from './AllCandies'
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'

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
          <Switch>
            <Route exact path='/candies' component={AllCandies} />
            <Link to={'/candies'}>Look inside the bag</Link>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default Root
