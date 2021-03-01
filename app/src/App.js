import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import Restaurant from './Restaurant/Restaurant'
import Collections from './Collections/Collections'
import OrderOnline from './Order/OrderOnline'


const App = () => {
  return(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/restaurant" component={ Restaurant } />
        <Route exact path="/collections" component={ Collections } />
        <Route exact path="/order-online" component={ OrderOnline } />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App