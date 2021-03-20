import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from './Components/Homepage/Homepage'
import Restaurant from './Components/Restaurant/Restaurant'
import CollectionDetail from './Components/Collections/CollectionDetail'
import OrderOnline from './Components/Order/OrderOnline'
import Search from './Components/Search/Search'
import Cart from './Components/Restaurant/Cart/Cart'

import SearchContextProvider from './Contexts/SearchContext'
import RestaurantContextProvider from './Contexts/RestaurantContext'
import CartContextProvider from './Contexts/CartContext'

const App = () => {
  return(
    <React.Fragment>
      <BrowserRouter>
        <SearchContextProvider>
          <RestaurantContextProvider>
              <CartContextProvider>
                <Search />
                <Route exact path="/restaurant/:res_name" component={ Restaurant } />
                <Route exact path="/cart" component= { Cart } />
              </CartContextProvider>
          </RestaurantContextProvider>
          <CartContextProvider>
            <Route exact path="/" component={ Homepage } />
          </CartContextProvider>
          <Route exact path='/details/:id' component={ CollectionDetail } />
          <Route exact path="/order-online" component={ OrderOnline } />
        </SearchContextProvider>                  
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App