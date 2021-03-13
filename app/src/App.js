import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import Restaurant from './Restaurant/Restaurant'
import CollectionDetail from './Collections/CollectionDetail'
import OrderOnline from './Order/OrderOnline'
import Search from './Search/Search'

import SearchContextProvider from './Contexts/SearchContext'
import RestaurantContextProvider from './Contexts/RestaurantContext'

const App = () => {
  return(
    <React.Fragment>
      <BrowserRouter>
        <SearchContextProvider>
          <RestaurantContextProvider>
            <Search />
            <Route exact path="/restaurant/:res_name" component={ Restaurant } />
          </RestaurantContextProvider>
          <Route exact path="/" component={ Homepage } />
          <Route exact path='/details/:id' component={ CollectionDetail } />
          <Route exact path="/order-online" component={ OrderOnline } />
        </SearchContextProvider>                  
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App