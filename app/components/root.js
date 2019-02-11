import React from 'react'
import AllCandies from './AllCandies'
import SingleCandy from './SingleCandy'
import AddCandy from './addCandy'
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
        <ul id="navList">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/candies'}>Goodie Bag</Link></li>
          <li><Link to={'/candies/add'}>Add A Candy</Link></li>
        </ul>
        
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <Switch>
            <Route exact path='/candies' component={AllCandies} />
            <Route path='/candies/add' component={AddCandy} />
            <Route path='/candies/:candyId' component={SingleCandy} />
            <Link to={'/candies'}>Look inside the bag</Link>
          </Switch>  
        </main>
      </div>
    </Router>
  )
}

export default Root
