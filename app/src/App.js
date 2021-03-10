import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import Restaurant from './Restaurant/Restaurant'
import CollectionDetail from './Collections/CollectionDetail'
import OrderOnline from './Order/OrderOnline'
import Search from './Search/Search'

import SearchContextProvider from './Contexts/SearchContext'

const App = () => {
  return(
    <React.Fragment>
      <BrowserRouter>
        <SearchContextProvider>
          <Search />
          <Route exact path="/" component={ Homepage } />
          <Route exact path='/details/:id' component={ CollectionDetail } />
        </SearchContextProvider>
        <Route exact path="/restaurant" component={ Restaurant } />
        <Route exact path="/order-online" component={ OrderOnline } />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App